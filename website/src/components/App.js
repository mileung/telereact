import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Features from './Features';
import CenterColumn from './CenterColumn';
import A from './A';

const Container = styled.div`
  padding-bottom: 2.5rem;
`;

const CodeSandbox = styled.iframe.attrs({
  src:
    'https://codesandbox.io/embed/telereact-example-cecwo?fontsize=14&hidenavigation=1&theme=dark',
  title: 'telereact-example',
  allow:
    'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking',
  sandbox:
    'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
})`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Banner />
      <Features />
      <CenterColumn>
        <h2 className="" style={{ marginBottom: '0.5rem' }}>
          Demo
        </h2>
        <CodeSandbox />
        <h2 className="" style={{ marginTop: '1rem' }}>
          Concepts
        </h2>
        <h3 className="mt25">Provider</h3>
        <p>
          The <code>Provider</code> component is used for wrapping your React app. Any component
          inside the <code>Provider</code> can connect to the global state using the{' '}
          <code>connect</code> function. The global state is a plain object that can be read and
          updated by any connected component. Props you can pass to the <code>Provider</code>{' '}
          component include:
        </p>
        <p>
          <code>initialState</code>: Defaults to <code>{`{}`}</code>
        </p>
        <p>
          <code>onSetState</code>: An optional function <code>{`(state, meta) => {}`}</code>
        </p>
        <p>
          <code>observers</code>: An optional object whose properties take the form of{' '}
          <code>{`stateKey: (before, after, meta) => {}`}</code> and will be called whenever the
          corresponding state property updates.
        </p>
        <h3 className="mt25">connect</h3>
        <p>
          The <code>connect</code> function takes a string of comma separated state keys as the
          argument and returns a{' '}
          <A href="https://reactjs.org/docs/higher-order-components.html">higher order component</A>
          . If you wrote <code>{`connect('a, b, c')(Example)`}</code>, the <code>Example</code>{' '}
          component would have <code>a</code>, <code>b</code>, and <code>c</code> passed as props -
          their values corresponding to the global state's. If nothing or <code>undefined</code> is
          passed to <code>connect</code>, the HOC will apply all of the global state's properties to
          the component. If <code>null</code> is passed to <code>connect</code>, the HOC will only
          pass <code>setState</code> to the component.
        </p>
        <h3 className="mt25">setState</h3>
        <p>
          Every connected component will have <code>setState</code> passed as a prop.{' '}
          <code>setState</code> is a function that takes an updated state object and optional meta
          object as arguments. Passing a single object to <code>setState</code> will assign its
          properties to the global state.
        </p>
        <h4 className="mt25">deepMerge</h4>
        <p>
          To update deeply nested state properties without overwriting any other properties, you can
          add <code>deepMerge: true</code> to the meta object like{' '}
          <code>{`setState({ a: { c: 4 } }, { deepMerge: true })`}</code>. This will update the
          global state from something like: <code>{`{ a: { b: 2 } }`}</code> to{' '}
          <code>{`{ a: { b: 2, c: 4 } }`}</code>. Note that you cannot deep merge values into
          arrays.
        </p>
      </CenterColumn>
    </Container>
  );
};

export default App;
