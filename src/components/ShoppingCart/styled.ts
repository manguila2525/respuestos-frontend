import styled from 'styled-components'

export const ListStyle = styled.li`
  height: 120px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px;
  list-style: none;
  /* height: 100%; */
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -3px 1px 10px 1px rgb(0 0 0 / 15%);
`
export const InfoStyle = styled.h4`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  padding: 15px 0;
  font-weight: 500;
  color: #2e2a2a;
`

export const ImagenStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const TextEnd = styled.h1`
  text-align: end;
  color: #2e2a2a;
  font-weight: 500;
`
export const TextCenter = styled.h1`
  font-weight: 500;
  color: #2e2a2a;
`
export const SpanText = styled.span`
  font-size: 20px;
`
export const BtnDelete = styled.button`
  position: absolute;
  padding: 5px 50px;
  border: none;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 30px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
  box-shadow: -1px 1px 2px 0px rgb(9 231 220);
  top: -17px;
  right: -10px;
`
export const DivStyle = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 25px;
`
export const DivStylePrice = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const DivFlexStyle = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivImgStyle = styled.div`
  position: relative;
  margin: 15px;
  width: 140px;
  height: 115px;
  border-radius: 130px;
  overflow: hidden;
  border-radius: 4em;
  overflow: hidden;
`
