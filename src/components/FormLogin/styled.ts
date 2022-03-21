import styled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '3px',
  p: 4,
  outline: 'none',
}
export const SignUpBtn = styled.div`
display: block;
text-align: center;
margin: 0 20%;
margin-top : 20px;
border: solid;
background: transparent;
padding: 10px 20px;
background: linear-gradient(90deg, var(--primary) 0%, rgb(9, 231, 220) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
border: none;

transition: all linear 0.1s;
cursor: pointer;
font-size: 15px;
font-weight: bold;

&:hover {
  background: linear-gradient(
    90deg,
    rgb(19, 60, 148) 0%,
    rgb(4, 117, 112) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
}
`

export const Separator = styled.hr`
  border: solid 0.1px #eee;
  margin: 0 5%;
`
