
const loginState = {
  isLogin: false,
  username: '',
  loginTime: ''
}

function reducer(state = loginState, action) {
  const payload = action.payload
  switch(action.type) {
    case 'SET_IS_LOGIN':
      return { ...state, isLogin: payload }
    case 'SET_LOGIN_TIME':
      return { ...state, loginTime: new Date()}
    case 'SET_LOGIN_USER':
      return { ...state, username: payload }
    default:
      return state
  }
}

export default reducer
