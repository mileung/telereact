import React from 'react';
import styled from 'styled-components';
import { connect } from 'telereact';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

const UIContainer = styled.div.attrs({ className: 'row' })`
  padding: 1rem;
  > *:first-child {
    margin-right: 1rem;
  }
`;

const Router = React.memo(({ accessToken }) => {
  return (
    <BrowserRouter>
      <UIContainer>
        <Route path="/" component={Sidebar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/settings"
            render={props => (accessToken ? <Settings {...props} /> : <Redirect to="/" />)}
          />
          <Route path="/*" render={() => <Redirect to="/" />} />
        </Switch>
      </UIContainer>
    </BrowserRouter>
  );
});

export default connect('accessToken')(Router);
