interface RemoveItemCar {
  type: 'DELETE'
  payload: string
}
interface AddItemCar {
  type: 'ADD'
  payload: {
    id: ''
    title: 'Frenos'
    price: 50
    count: '1'
    img: 'https://espirituracer.com/archivos/2017/11/portada-frenos.jpg'
  }
}
type ActionCar = AddItemCar | RemoveItemCar
const initialState = [
  {
    id: '',
    title: 'Frenos',
    price: 50,
    count: '1',
    img: 'https://espirituracer.com/archivos/2017/11/portada-frenos.jpg',
  },
]
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
