import React from 'react'
import styled from "styled-components";
import {ArrowLeftOutlined} from '@ant-design/icons'
const Button = styled.button`
color : #E67F1E;
width : 24px;
height : 22px;
font-size : 20px;
`;
const Back = () => {
  return (
    <Button>
<ArrowLeftOutlined/>
    </Button>
  )
}

export default Back