import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavStyled, NavBrand, NavList, Button, ButtonIcon } from './styled'
import LogoutIcon from '@mui/icons-material/Logout'
import FormLogin from '../FormLogin'
import ShoppingCart from '../ShoppingCart'

import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const [state, setstate] = useState(false)
  const stateSesion = useSelector((state) => state)
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch({ type: 'open' })
  }
  const signOutSeason = () => {
    dispatch({ type: '@login/close', state: 'false', payload: [] })
    setstate(false)
    // signOut()
  }
  useEffect(() => {
    setstate(localStorage.getItem('sesion'))
  }, [stateSesion])
  return (
    <NavStyled>
      <NavBrand>
        <h2>
          <Link to='/'>Brand</Link>
        </h2>
      </NavBrand>
      <NavList>
        <li>
          <h3>About</h3>
        </li>
        <li>
          <h3>Contact</h3>
        </li>
        <li>
          <h3>
            {state === 'true' ? (
              <ButtonIcon onClick={signOutSeason}>
                <LogoutIcon></LogoutIcon>
              </ButtonIcon>
            ) : (
              <Button onClick={() => openModal()}>Login</Button>
            )}
            <FormLogin />
          </h3>
        </li>
        <li>
          <ShoppingCart />
        </li>
      </NavList>
    </NavStyled>
  )
}

export default Navbar
