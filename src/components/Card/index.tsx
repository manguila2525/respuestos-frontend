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
  title: string
  description: string
  count: number
  price: number
  imageUrl: string
}

const Card = (props: propsCard) => {
  const { title, price, imageUrl } = props

  const dispatchOpenModal = useDispatch()
  const openModal = () => {
    dispatchOpenModal({ type: 'open' })
  }
  const card = (
    <LinkStyledLogin onClick={() => openModal()}>
      <ImgStyled src={imageUrl} alt={title} />
      <CardPrice>{price}$</CardPrice>
      <FooterStyled>
        <CardTitle>{title}</CardTitle>
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
