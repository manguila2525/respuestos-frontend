import Sidebar from '../Sidebar'
import Ecommerce from '../Ecommerce'

import { MainStyled } from './styled'

const Main = () => {
  return (
      <MainStyled>
        <Sidebar/>
        <Ecommerce/>
      </MainStyled>
  )
}

export default Main
