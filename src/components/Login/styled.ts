import styled from 'styled-components'

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
  color: #5189d6;
  &:hover {
    outline: solid 1px rgb(27, 151, 173);
    background: linear-gradient(
      90deg,
      rgb(19, 60, 148) 0%,
      rgb(4, 117, 112) 100%
    );
    color: #5189d6;
  }
`
