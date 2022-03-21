import Login from '../Login'
import SignUp from '../SignUp'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../../theme'
import { style, SignUpBtn, Separator } from './styled'

import { useState } from 'react'

const FormLogin = () => {
  const [signup, setSignup] = useState(false)
  const dispatchCloseModal = useDispatch()
  const closeModal = () => {
    dispatchCloseModal({ type: 'close' })
  }
  const state = useSelector((state: any) => state.modal)

  const handleSignUp = () => {
    setSignup(!signup)
  }

  return (
    <>
      <div>
        <Modal
          open={state}
          onClose={() => closeModal()}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Title> {signup ? 'Sign Up' : 'Login'}</Title>
            {signup === true ? <SignUp /> : <Login />}
            <Separator />
            <SignUpBtn onClick={handleSignUp}>
              {signup ? 'Sign In' : 'Crear cuenta nueva'}
            </SignUpBtn>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default FormLogin
