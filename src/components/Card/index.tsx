import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  CardStyled,
  CardBtn,
  CardPrice,
  CardTitle,
  LinkStyledLogin,
  FooterStyled,
  ImgStyled,
} from './styled'
import { useDispatch } from 'react-redux'

import { handleBtnLike } from './useCard'

interface propsCard {
  id: number
  nombre: string
  descripcion: string
  cantidad: number
  price: number
  imageUrl: string
}

const Card = (props: propsCard) => {
  const { nombre, price, imageUrl } = props

  const dispatchOpenModal = useDispatch()
  const openModal = () => {
    dispatchOpenModal({ type: 'open' })
  }
  const card = (
    <LinkStyledLogin onClick={() => openModal()}>
      <ImgStyled src={imageUrl} alt={nombre} />
      <CardPrice>{price}$</CardPrice>
      <FooterStyled>
        <CardTitle>{nombre}</CardTitle>
      </FooterStyled>
    </LinkStyledLogin>
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

export default Card
