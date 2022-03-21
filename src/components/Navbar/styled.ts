import styled from 'styled-components'

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  box-shadow: 1px 2px 3px 0 #e8e8e8;
`
export const NavBrand = styled.div`
  width: 140px;
  text-align: center;
  font-size: 32px;
  background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 400px;
  list-style: none;
  background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const Button = styled.button`
  background: transparent;
  padding: 10px 20px;
  outline: solid 1px var(--success);
  background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  transition: all linear 0.1s;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    outline: solid 1px rgb(27, 151, 173);
    background: linear-gradient(
      90deg,
      rgb(19, 60, 148) 0%,
      rgb(4, 117, 112) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const ButtonIcon = styled.button`
  background: transparent;
  padding: 15px 17px;
  outline: solid 1px var(--success);
  background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 0 5px 0 #ccc;
  transition: all linear 0.1s;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #0694c6;
  &:hover {
    outline: solid 1px rgb(27, 151, 173);
    color: #069499;
    background: linear-gradient(
      90deg,
      rgb(19, 60, 148) 0%,
      rgb(4, 117, 112) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
