/*

https://styled-components.com/ 

styled-components is the result of wondering how we could enhance CSS for styling React component systems. 
By focusing on a single use case we managed to optimize the experience for developers as well as the output 
for end users.

Apart from the improved experience for developers, styled-components provides:
Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:


Installation

npm install --save styled-components

*/


import React from 'react'
import styled from 'styled-components'

function Styled_component() {

    const Myhead = styled.h1`
 font-size: 1.5em;
 text-align: center;
 color: palevioletred;
 background-color:red;
 `;

    const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:skyblue;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`
const Btn = styled.button`
    border:2px solid white;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:LightGray;
    color:white;
    display:block;
    margin:0 auto;
`;

const Btn_red = styled(Btn)`
    background:red;
`;
const Btn_yellow = styled(Btn)`
    background:yellow;
`;
const Btn_pink = styled(Btn)`
    background:pink;
`;
const Btn_green = styled(Btn)`
    background:green;
`;
const Btn_blue = styled(Btn)`
    background:blue;
`;
const Btn_orange = styled(Btn)`
    background:orange;
`;


const Propsbtn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


    return (
        <div>
            <Myhead><h1>Hi i am custome styled component</h1></Myhead>
            <hr />
            <MyButton>My Button</MyButton>
            <hr />
            <Btn>Basic Button</Btn>
            <Btn_red>Red Button</Btn_red>
            <Btn_green>Green Button</Btn_green>
            <Btn_yellow>yellow Button</Btn_yellow>
            <Btn_pink>Pink Button</Btn_pink>
            <Btn_blue>Blue Button</Btn_blue>
            <Btn_orange>Orange Button</Btn_orange>
           <hr />
           <Propsbtn>Without Props</Propsbtn>
           <Propsbtn primary>With Props</Propsbtn>
        </div>
    )
}

export default Styled_component