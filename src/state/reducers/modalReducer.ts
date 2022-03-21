interface openModal {
  type: 'open'
}

interface closeModal {
  type: 'close'
}

type Action = openModal | closeModal

const reducerModal = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'open':
      state = true
      return state
    case 'close':
      state = false
      return state
    default:
      return state
  }
}

export default reducerModal
