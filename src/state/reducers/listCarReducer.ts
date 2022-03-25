interface RemoveItemCar {
  type: 'DELETE'
  payload: string
}
interface AddItemCar {
  type: 'ADD'
  payload: {
    id: ''
    title: ''
    price: 0
    count: ''
    img: ''
  }
}
type ActionCar = AddItemCar | RemoveItemCar
const initialState = []
const listCarReducer = (state = initialState, action: ActionCar) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload)
      console.log(action.payload)
      return state

    case 'DELETE':
      const result = state.filter((position) => position.id !== action.payload)
      state = result
      console.log(state)
      return state

    default:
      return state
  }
}

export default listCarReducer
