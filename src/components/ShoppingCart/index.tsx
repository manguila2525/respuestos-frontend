import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { ShoppingCart } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {
  ListStyle,
  ImagenStyle,
  InfoStyle,
  TextEnd,
  TextCenter,
  SpanText,
  BtnDelete,
  DivStyle,
  DivImgStyle,
  DivFlexStyle,
  DivStylePrice,
} from './styled'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import { sendWhatsapp, mapMessage } from '../../utils/handleWhatsapp.js'
interface propsCard {
  id: number
  title: string
  descripcion: string
  cantidad: number
  price: number
  img: string
  description: string
}
const index = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  const listCarShop = useSelector((state: any) => state.listCarShop)

  const [unit, setUnit] = useState(1)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const DeleteItemCar = (id: any) => {
    dispatch({ type: 'DELETE', payload: id })
  }

  const addUnit = (e: any) => {
    setUnit(parseInt(e.target.value))
  }

  return (
    <>
      <ShoppingCart onClick={handleOpen}></ShoppingCart>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
      >
        <Box sx={style}>
          <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Typography
              sx={{ display: 'flex' }}
              id='modal-modal-title'
              variant='h5'
              component='h2'
            >
              Carrito de Compra
            </Typography>
            <Button variant='outlined' onClick={() => mapMessage(listCarShop)}>
              Comprar
            </Button>
          </Grid>
          <Box>
            <ul>
              {listCarShop.map((data: propsCard) => {
                const { img, title, description, count, price, id } = data
                return (
                  <ListStyle key={id}>
                    <DivImgStyle>
                      <ImagenStyle src={img} />
                    </DivImgStyle>
                    <DivStyle>
                      <TextCenter>{title}</TextCenter>
                      <InfoStyle>{description}</InfoStyle>
                    </DivStyle>
                    <DivFlexStyle>
                      {/* <Autocomplete
                      sx={{ width: 120 }}
                      options={amount}
                      onLoad={(e) => console.log(e)}
                      renderInput={(params) => {
                        return <TextField {...params} label='Unidades' />
                      }}
                    ></Autocomplete> */}
                      <input type='number' onChange={addUnit} value={unit} />
                    </DivFlexStyle>
                    <DivStylePrice>
                      <TextEnd>
                        <SpanText>C/U:</SpanText> {price}$
                      </TextEnd>
                      <TextEnd>
                        <SpanText>Total:</SpanText> {price * unit}$
                      </TextEnd>
                      <BtnDelete onClick={() => DeleteItemCar(id)}>
                        <RemoveShoppingCartIcon />
                      </BtnDelete>
                    </DivStylePrice>
                  </ListStyle>
                )
              })}
            </ul>
          </Box>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography id='modal-modal-title2' variant='h5' component='h2'>
              Articulos que te gustan
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default index
