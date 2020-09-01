import React from 'react';
import PropTypes from 'prop-types';

export const isObject = v => v !== null && typeof v === 'object';

// modified from https://stackoverflow.com/a/30503290/4975090
export const deepClone = obj => {
  if (!isObject(obj)) {
    return obj;
  }
  let temp;
  try {
    temp = new obj.constructor();
  } catch {
    temp = {}; // files have 2 required arguments which is why this may catch
  }
  for (const key in obj) {
    temp[key] = deepClone(obj[key]);
  }
  return temp;
};

// modified from https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6#gistcomment-2978541
export const deepMerge = (target, source) => {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (
        source[key] instanceof Object &&
        !Array.isArray(source[key]) // NB: DOES NOT DEEP MERGE ARRAYS.
      ) {
        Object.assign(source[key], deepMerge(target[key] || {}, source[key]));
      }
    }
    Object.assign(target, source);
    return target;
  }
  return target;
};

const Context = React.createContext();

export class Provider extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    onSetState: PropTypes.func,
    observers: PropTypes.object,
  };

  static defaultPropTypes = { initialState: {} };

  constructor(props) {
    super(props);
    this.state = { ...props.initialState };
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setState: this.telereactSetState,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }

  telereactSetState = (data, meta = {}) => {
    const { onSetState, observers } = this.props;
    this.setState(
      prevState => {
        let newState;
        if (observers) {
          // This does not do a deep check for observers. Will change if a compelling case is presented.
          newState = meta.deepMerge ? { ...prevState } : { ...prevState, ...data };
          const observersToCall = [];
          for (const key in data) {
            if (meta.deepMerge) {
              newState[key] =
                typeof data[key] === 'object'
                  ? deepMerge(deepClone(prevState[key]), data[key])
                  : data[key];
            } else {
              newState[key] = data[key];
            }
            const observer = observers[key];
            if (observer) {
              observersToCall.push(() => observer(prevState, newState, meta)); // eslint-disable-line
            }
          }
          observersToCall.forEach(f => f()); // this ensures all the observers get the same before and after state
        } else {
          newState = meta.deepMerge ? deepMerge({ ...prevState }, data) : { ...prevState, ...data };
        }
        return newState;
      },
      () => {
        onSetState && onSetState(this.state, meta);
      },
    );
  };
}

export const connect = keys => {
  const mapStateToProps = dict => {
    switch (keys) {
      case undefined:
        return dict;
      case null:
        return {};
      default:
        return eval(`({${keys}}) => ({${keys}})`)(dict);
    }
  };
  return Component => props => (
    <Context.Consumer>
      {value => (
        <Component {...props} {...mapStateToProps(value.state)} setState={value.setState} />
      )}
    </Context.Consumer>
  );
};
