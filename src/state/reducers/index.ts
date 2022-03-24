import { combineReducers } from 'redux'
import reducerModal from './modalReducer'
import sesionReducer from './sesionReducer'
import listCarReducer from './listCarReducer'

const reducers = combineReducers({
  modal: reducerModal,
  sesion: sesionReducer,
  listCarShop: listCarReducer,
})

export default reducers
