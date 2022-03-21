import frenos from '../../img/frenos.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  CardStyled,
  CardBtn,
  CardPrice,
  CardTitle,
  LinkStyled,
  FooterStyled,
  ImgStyled,
} from './styled'

import { handleBtnLike } from './useCard'

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
