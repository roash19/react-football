import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from "./Hoc/Layout";
import Home from './Components/Home';

class Routers extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
    );
  }
}

export default Routers;
