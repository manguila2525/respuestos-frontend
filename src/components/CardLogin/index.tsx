import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IosShareIcon from '@mui/icons-material/IosShare'
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
  BtnAdded,
} from './styled'

import { handleBtnLike } from './useCard'
import { useDispatch } from 'react-redux'

interface propsCard {
  id: number
  title: string
  descripcion: string
  cantidad: number
  price: number
  imageUrl: string
  description: string
}

const CardLogin = (props: propsCard) => {
  const [itemAdd, setItemAdd] = useState(false)
  const { id, title, price, imageUrl, description } = props
  const infoCard = { id, title, count: 1, price, img: imageUrl, description }
  const dispatch = useDispatch()
  const addCar = () => {
    setItemAdd(!itemAdd)
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

        {itemAdd ? (
          <BtnAdded disabled>
            <IosShareIcon />
          </BtnAdded>
        ) : (
          <BtnAdd onClick={addCar}>
            <AddShoppingCartIcon />
          </BtnAdd>
        )}
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
