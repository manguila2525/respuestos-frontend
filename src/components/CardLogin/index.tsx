import frenos from '../../img/frenos.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  CardStyled,
  CardBtn,
  CardPrice,
  CardTitle,
  LinkStyled,
  ContentStyle,
  FooterStyled,
  ImgStyled,
  BtnAdd,
} from './styled'

import { handleBtnLike } from './useCard'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'

interface propsCard {
  id: number
  title: string
  descripcion: string
  cantidad: number
  price: number
  imageUrl: string
}

const CardLogin = (props: propsCard) => {
  const { id, title, price, imageUrl } = props
  const infoCard = { id, title, count: 1, price, img: imageUrl }
  const dispatch = useDispatch()
  const addCar = () => {
    dispatch({ type: 'ADD', payload: infoCard })
  }

  const card = (
    <ContentStyle>
      <LinkStyled to={`/spare/${id}`}>
        <ImgStyled src={imageUrl} alt={title} />
        <CardPrice>{price}$</CardPrice>
      </LinkStyled>
      <FooterStyled>
        <CardTitle>{title}</CardTitle>
        <BtnAdd onClick={addCar}>
          <AddShoppingCartIcon />
        </BtnAdd>
      </FooterStyled>
    </ContentStyle>
  )

  return (
    <CardStyled>
      <CardBtn onClick={handleBtnLike}>
        <FavoriteIcon></FavoriteIcon>
      </CardBtn>
      {card}
    </CardStyled>
  )
}

export default CardLogin
