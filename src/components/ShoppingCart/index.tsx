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
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'

interface listCarInfo {
  listCar: []
}

const index = (props: listCarInfo) => {
  const { listCar } = props
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const listCarShop = useSelector((state) => state.listCarShop)
  const amount = [{ label: 1 }, { label: 2 }, { label: 3 }]
  const [unit, setUnit] = useState(1)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const DeleteItemCar = (id: any) => {
    dispatch({ type: 'DELETE', payload: id })
  }

  return (
    <div>
      <ShoppingCart onClick={handleOpen}>Open modal</ShoppingCart>
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
            <Button variant='outlined'>Comprar</Button>
          </Grid>
          <Box>
            <ul>
              {listCarShop.map((nombre, i) => (
                <ListStyle key={i}>
                  <DivImgStyle>
                    <ImagenStyle src={nombre.img} />
                  </DivImgStyle>
                  <DivStyle>
                    <TextCenter>{nombre.title}</TextCenter>
                    <InfoStyle>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus, expedita tenetur dolor quidem assumenda laudantium
                      amet in perspiciatis incidunt animi. Voluptatum, accusamus
                      nostrum nulla maiores nobis non sed velit repellat?
                    </InfoStyle>
                  </DivStyle>
                  <DivFlexStyle>
                    <Autocomplete
                      sx={{ width: 120 }}
                      options={amount}
                      renderInput={(params) => {
                        setUnit(parseInt(params.inputProps.value))
                        return <TextField {...params} label='Unidades' />
                      }}
                    ></Autocomplete>
                  </DivFlexStyle>
                  <DivStylePrice>
                    <TextEnd>
                      <SpanText>C/U:</SpanText> {nombre.price}$
                    </TextEnd>
                    <TextEnd>
                      <SpanText>Total:</SpanText> {nombre.price * unit}$
                    </TextEnd>
                    <BtnDelete onClick={() => DeleteItemCar(nombre.id)}>
                      <RemoveShoppingCartIcon />
                    </BtnDelete>
                  </DivStylePrice>
                </ListStyle>
              ))}
            </ul>
          </Box>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography id='modal-modal-title2' variant='h5' component='h2'>
              Articulos que te gustan
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default index
