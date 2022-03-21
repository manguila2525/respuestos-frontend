import { combineReducers } from 'redux'
import reducerModal from './modalReducer'
import sesionReducer from './sesionReducer'

const reducers = combineReducers({
  modal: reducerModal,
  sesion: sesionReducer,
})

export default reducers
