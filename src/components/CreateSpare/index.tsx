import Box from '@mui/material/Box'
import { Title, FlexColumn } from '../../theme'
import { style, SignUpBtn, Separator, Input, Subtitle } from './styled'

import { useState } from 'react'

const FormLogin = () => {
  const [spare, setSpare] = useState({
    title: '',
    description: '',
    price: 0,
    count: 1,
  })
  const handleInput = (e: any) => {
    setSpare({
      ...spare,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div>
        <Box sx={style}>
          <Title>
            <Subtitle>Create Spare</Subtitle>
          </Title>
          <Separator />
          <form
            method='POST'
            action='http://localhost:8000/api/spare'
            encType='multipart/form-data'
          >
            <FlexColumn>
              <Input
                type='text'
                placeholder='Titulo'
                onChange={handleInput}
                name='title'
                value={spare.title}
              />
              <Input
                type='text'
                placeholder='Descripcion'
                onChange={handleInput}
                name='description'
                value={spare.description}
              />
              <Input
                type='number'
                placeholder='Precio'
                onChange={handleInput}
                name='price'
              />
              <Input
                type='number'
                placeholder='Cantidad'
                onChange={handleInput}
                name='count'
              />
              <Input
                type='file'
                placeholder='Imagen'
                onChange={handleInput}
                name='image'
              />
            </FlexColumn>
            <SignUpBtn type='submit'>Create</SignUpBtn>
          </form>
        </Box>
      </div>
    </>
  )
}

export default FormLogin
