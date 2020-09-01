# telereact

> The most elegant state manager for React apps

[![NPM](https://img.shields.io/npm/v/telereact.svg)](https://www.npmjs.com/package/telereact) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install telereact
```

## Documentation

[telereact.com](https://telereact/com)

## Basic usage

```jsx
import { Provider, connect } from 'telereact';

const App = () => (
  <Provider initialState={{ a: 1, b: { c: 3, d: 0 } }}>
    <Router />
  </Provider>
);
// ...
const Container = ({ setState, a, b }) => (
  <div>
    <button onClick={() => setState({ a: a + 1 })} />
    <p>a: {a}</p>
    <button
      onClick={() =>
        setState(
          { b: { c: b.c + 1 } }, // This setState call will not change b.d
          { deepMerge: true }, // because the meta object has deepMerge: true
        )
      }
    />
    <p>b.c: {b.c}</p>
    <p>b.d: {b.d}</p>
  </div>
);
export default connect('a, b')(Container);
```

## License

MIT © [MiLeung](https://github.com/MiLeung)
