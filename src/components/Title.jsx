import React from 'react'
import styled from "styled-components";

const Heading  = styled.p`
font-size : 24px;
font-weight : bold;
text-align : center;
text-wrap : no-wrap;
width : fit-content ;
margin : 10px 12px;
`;
const Title = ({content}) => {
  return (
    <Heading>{content}</Heading>
  )
}

export default Title