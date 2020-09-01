import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'telereact';
import SpacedContainer from '../components/SpacedContainer';

const Sidebar = React.memo(({ setState, accessToken }) => {
  return accessToken ? (
    <SpacedContainer>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/settings">
        <h3>Settings</h3>
      </Link>
      <span className="button" onClick={() => setState({ accessToken: null })}>
        <h3>Sign out</h3>
      </span>
    </SpacedContainer>
  ) : (
    <span className="button" onClick={() => setState({ accessToken: 'secret' })}>
      <h3>Sign in</h3>
    </span>
  );
});

export default connect('accessToken')(Sidebar);
