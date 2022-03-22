import frenos from '../../img/frenos.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  CardStyled,
  CardBtn,
  CardPrice,
  CardTitle,
  LinkStyled,
  FooterStyled,
  ImgStyled,
  BtnAdd,
} from './styled'

import { handleBtnLike } from './useCard'
import { Button } from '@mui/material'

interface propsCard {
  id: number
  nombre: string
  descripcion: string
  cantidad: number
  price: number
  imageUrl: string
}

const CardLogin = (props: propsCard) => {
  const { id, nombre, price, imageUrl } = props

  const card = (
    <LinkStyled to={`/spare/${id}`}>
      <ImgStyled src={imageUrl} alt={nombre} />
      <CardPrice>{price}$</CardPrice>
      <FooterStyled>
        <CardTitle>{nombre}</CardTitle>
        <BtnAdd>
          <AddShoppingCartIcon />
        </BtnAdd>
      </FooterStyled>
    </LinkStyled>
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
