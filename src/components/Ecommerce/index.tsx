import Card from '../Card'
import CardLogin from '../CardLogin'
import Search from '../Search'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MainEcommerce, ContentCard } from './styled'
import axios from 'axios'

const Ecommerce = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
  })
  const [spares, setSpares] = useState([])
  const stateSesion = useSelector((state) => state)

  const getApiSpare = async () => {
    const { data } = await axios.get('http://localhost:8000/api/spare')
    setSpares(data.data)
  }

  useEffect(() => {
    getApiSpare()
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [stateSesion])
  return (
    <MainEcommerce>
      {user.nombre}
      <Search />
      <ContentCard>
        {spares.map(({ title, description, _id, imageUrl }) =>
          user.length === 0 ? (
            <Card
              id={_id}
              imageUrl={imageUrl}
              nombre={title}
              descripcion={description}
              cantidad={10}
              price={50}
              key={_id}
            />
          ) : (
            <CardLogin
              id={_id}
              imageUrl={imageUrl}
              nombre={title}
              descripcion={description}
              cantidad={10}
              price={50}
              key={_id}
            />
          )
        )}
      </ContentCard>
    </MainEcommerce>
  )
}

export default Ecommerce
