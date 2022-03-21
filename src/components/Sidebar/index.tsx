import { SidebarStyled, SidebarTitle, SidebarGroup } from './styled'

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarTitle>Tipo de respuestos</SidebarTitle>
      <SidebarGroup></SidebarGroup>
      <SidebarGroup>
        <input type='checkbox' name='' id='' /> <span>Frenos</span>
      </SidebarGroup>
      <SidebarGroup>
        <input type='checkbox' name='' id='' /> <span>Cauchos</span>
      </SidebarGroup>
      <SidebarGroup>
        <input type='checkbox' name='' id='' /> <span>Correa de tiempo</span>
      </SidebarGroup>
      <SidebarGroup>
        <input type='checkbox' name='' id='' /> <span>Liga de frenos</span>
      </SidebarGroup>
    </SidebarStyled>
  )
}

export default Sidebar
