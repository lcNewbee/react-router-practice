import React, { Component } from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class PrivateRoute extends Component {

  render() {
    const { isLogin } = this.props;
    const { path, component } = this.props;
    console.log('PrivateRoute: path = ', path)
    return isLogin ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={{pathname: '/login', state: { redirect: path }}} />
    )
  }
}

export default connect(
  (state) => ({ isLogin: state.loginState.isLogin })
)(PrivateRoute);

