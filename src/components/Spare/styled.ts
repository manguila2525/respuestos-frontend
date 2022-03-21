import styled from 'styled-components'

export const ContentSpare = styled.div`
  padding: 20px;
  height: 650px;
  border-radius: 10px;
  box-shadow: 0 0 3px 0px #dbdbdb;
  max-width: 500px;
  position: relative;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`
export const ImgSpare = styled.img`
  width: 100%;
  height: 100%;
`
export const ContentList = styled.div`
  height: 150px;
  margin-top: 40px;
`
export const ListStar = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  list-style: none;
`
export const ListCommunication = styled.ul`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 80%;
  align-items: center;
  list-style: none;
`

export const Descripcion = styled.p`
  padding: 0 40px;
  text-align: justify;
  color: var(--info);
`
export const BtnIcon = styled.li`
  border: solid 1px #eee;
  border-radius: 9999px;
  padding: 8px 9px;
  box-shadow: 0px 0px 6px 0px #eee;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`
export const Title = styled.h2`
  color: var(--info);
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
`
export const TitleInfo = styled.h2`
  color: #fff;
  background: var(--primary);
  padding: 10px;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`
export const Price = styled.p`
  color: green;
  font-size: 35px;
`
export const ContentTools = styled.div`
  padding: 40px 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`
export const BtnCountLeft = styled.button`
position:absolute;
padding: 15px 25px;
border: none;
border-bottom-left-radius: 50px;
border-top-right-radius: 30px;
font-size: 25px;
font-weight: bold;
cursor: pointer;
background: linear-gradient(90deg,var(--primary) 0%,rgb(9,231,220) 100%);
box-shadow: -1px 1px 2px 0px rgb(9,231,220);
bottom:0;
left:0;
}
`

export const BtnCountRight = styled.button`
background: linear-gradient(90deg,var(--primary) 0%,rgb(9,231,220) 100%);
position:absolute;
bottom:0;
right:0;
padding: 15px 25px;
border: none;
border-radius: 5px;
font-size: 25px;
font-weight: bold;
cursor: pointer;
border-bottom-right-radius: 50px;
border-top-left-radius: 30px;
box-shadow: 1px 1px 2px 0px rgb(9,231,220);
}
`
export const ContentImg = styled.div`
  height: 500px;
`
