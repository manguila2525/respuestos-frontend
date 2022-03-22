import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardStyled = styled.div`
  flex-grow: 1;
  min-width: 250px;
  height: 250px;
  outline: solid 1px rgb(243, 242, 242);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 3px 5px 5px 0 #f0f0f0;
  cursor: pointer;
`
export const CardBtn = styled.button`
  background: var(--success);
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  transition: all linear 0.1s;
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: -10px;
  color: var(--info);
  z-index: 10;
  width: 60px;
  height: 60px;
  border-radius: 9999px;

  &:hover {
    background: rgb(105, 238, 205);
    color: rgb(104, 102, 102);
  }
`
export const CardPrice = styled.h3`
  position: absolute;
  left: -10px;
  top: -10px;
  color: var(--info);
  z-index: 10;
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  background: linear-gradient(90deg, var(--primary) 0%, rgb(94, 248, 240) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardTitle = styled.h3`
  color: #fff;
  font-size: 16px;
`
export const LinkStyled = styled(Link)`
  flex-grow: 1;
  min-width: 250px;
  height: 250px;
  outline: solid 1px rgb(243, 242, 242);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 3px 5px 5px 0 #f0f0f0;
  cursor: pointer;
  text-decoration: none;
`
export const LinkStyledLogin = styled.div`
  flex-grow: 1;
  min-width: 250px;
  height: 250px;
  outline: solid 1px rgb(243, 242, 242);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 3px 5px 5px 0 #f0f0f0;
  cursor: pointer;
  text-decoration: none;
`

export const FooterStyled = styled.footer`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 10;
  padding: 20px 15px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-item: center;
`
export const ImgStyled = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`
export const BtnAdd = styled.button`
  background: #4d494969;
  padding: 15px 20px;
  border-radius: 50px 50px 0;
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  color: #fff;
`
