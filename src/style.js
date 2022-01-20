import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 85vh;
background-color: red;
background-image:url(${({img})=>img});
background-repeat: no-repeat;
background-size: 100% 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:50px;
`

export const Title = styled.h1`
color: white;
font-size: 50px;
letter-spacing: 5px;

`

export const Btn = styled.button`
width: 200px;
height: 50px;
margin: 50px;
font-size: 20px;
border: 2px solid red;
border-radius: 55px;
background:transparent;
color: white;
&:hover{
    background-color: red;
}
`