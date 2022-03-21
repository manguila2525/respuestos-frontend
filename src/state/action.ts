const openModal = () => {
  return {
    type: 'open',
  }
}

const closeModal = () => {
  return {
    type: 'close',
  }
}

export { openModal, closeModal }
