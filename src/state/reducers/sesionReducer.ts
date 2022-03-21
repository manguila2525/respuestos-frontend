const initialState = {
  state: false,
  users: '',
}

interface Users {
  email: string
  password: string
}

interface SesionClose {
  type: '@login/close'
  state: boolean
  payload: Users
}

interface SesionOpen {
  type: '@login/open'
  state: boolean
  payload: Users
}
type Sesion = SesionClose | SesionOpen

const sesionReducer = (state: any = initialState, action: Sesion) => {
  switch (action.type) {
    case '@login/close':
      localStorage.setItem('sesion', action.state)
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, state: action.state, users: action.payload }
    case '@login/open':
      localStorage.setItem('sesion', action.state)
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, state: action.state, users: action.payload }
    default:
      return state
  }
}

export default sesionReducer
