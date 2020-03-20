export function setIsLogin(payload) {
  return {
    type: 'SET_IS_LOGIN',
    payload
  }
}

export function setLoginTime(payload) {
  return {
    type: 'SET_LOGIN_TIME',
    payload
  }
}

export function setUserName(payload) {
  return {
    type: 'SET_LOGIN_USER',
    payload
  }
}

export function login(payload) {
  const { username, isLogin } = payload;
  return (dispatch) => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     dispatch(setIsLogin(isLogin))
    //     dispatch(setLoginTime())
    //     dispatch(setUserName(username))
    //     resolve(true)
    //   }, 1000)
    // })
    dispatch(setIsLogin(isLogin))
    dispatch(setLoginTime())
    dispatch(setUserName(username))
  }
}