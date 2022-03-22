import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
/* import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart' */
import { ShoppingCart } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function index() {
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
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <ShoppingCart onClick={handleOpen}>Open modal</ShoppingCart>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-labeledby='modal-modal-title2'
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
