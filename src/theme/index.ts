import styled from 'styled-components'

export const Title = styled.h2`
  color: var(--info);
  margin-top: 10px;
  margin-bottom: 30px;
`
export const TitleBig = styled.h2`
  color: var(--info);
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const InputForm = styled.input`
  border: none;
  background: #e8f0fe;
  padding: 10px 15px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #ccc;
  }
`
export const FlexColum = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
export const FlexColumMarginInline = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30%;
`

export const Button = styled.button`
  background: transparent;
  padding: 10px 20px;
  outline: solid 1px #5189d6;
  background: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  transition: all ease 1s;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: #5189d6;
  &:hover {
    color: #426fab;
    outline: solid 1px #426fab;
  }
`
export const Message = styled.span`
  color: green;
  font-weight: bold;
  margin: 10px 0 10px 20px;
  border-radius: 3px;
`
export const MessageError = styled.span`
  color: #fc6868;
  font-weight: bold;
  margin: 10px 0 10px 20px;
  border-radius: 3px;
`
export const Container = styled.div`
  padding: 40px 20%;
`
export const Flex = styled.div`
  display: flex;
`
export const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const FlexJustify = styled.div`
  display: flex;
  justify-content: center;
`
