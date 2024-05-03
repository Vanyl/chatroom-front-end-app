import styled from 'styled-components'

export const DefaultButton = styled.button`
background-color:  ${(props) => (props.red && 'red') || '#645cfc'};
// background-color:  ${({red}) => (red && 'red') || '#645cfc'};
border: none;
padding: 10px;
color: white;
`
export const ExtendedButton = styled(DefaultButton)`
display: block;
width: 100vw;
`
// padding: 1.5rem 2rem;
export const Btn = styled.button`
 border: 1px solid  hsla(218, 100%, 17%, 1);
 white-space: nowrap;
 color: hsla(150, 14%, 97%, 1);
 cursor: pointer;
 outline: none;
 font-size: 1.5rem;
 text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
 letter-spacing: 0.1rem;
 user-select: none;
 margin: 1rem;
 transition: all 0.1s ease-in;


 ::-moz-focus-inner {
  border: 0;
 }

 &:hover {
  background-color: hsla(347, 49%, 51%, 1);
  transform: translateY(-3px);
 }

@media screen and (max-width: 45em) {
  padding: 1rem 1rem;
  font-size: 1.5rem;
  margin: 0.5rem;
 }
`

export const SignInBtn = styled(Btn)`
 text-decoration: none;
 background-color: rgb(197,67,127);
 box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
  0 1px 1px rgba(0, 0, 0, 0.05);
 border-bottom-width: 0.5rem;
 margin-top: 4.5rem;

 &:hover {
  background-color:  hsla(224, 89%, 46%, 1);
 }

 &:active {
  border-bottom-width: 0.1rem;
  border-top-width: 0.5rem;
 }
`

export const RegisterBtn = styled(Btn)`
text-decoration: none;
background-color: hsla(200, 22%, 72%, 1);
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
 0 1px 1px rgba(0, 0, 0, 0.05);
border-bottom-width: 0.5rem;

&:hover {
 background-color: #C3528B;
}

&:active {
 border-bottom-width: 0.1rem;
 border-top-width: 0.5rem;
}
`
