import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../store/login/actionCreator'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleUserNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      username: value
    })
  }

  handleLogin = async () => {
    const username = this.state.username;
    await this.props.login({ username, isLogin: true })
    console.log('login in success')
  }

  render() {
    const { isLogin, location } = this.props;
    console.log('loginpage props:', this.props);
    const { redirect = '/' } = location.state || {}
    return isLogin ? (
      <Redirect to={redirect} />
    ) : (
      <div>
        <form>
          <label>
            username:
            <input onChange={this.handleUserNameChange} />
          </label>
          <button onClick={this.handleLogin}>登录</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { isLogin } = state.loginState;
  return { isLogin };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actionCreators, dispatch),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)