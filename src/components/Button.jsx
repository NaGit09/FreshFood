import React from "react";
import styled from "styled-components";

const MaiButton = styled.button`
  color: #000;
  background-color: var(--primary);
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  width: 318px;
  &:hover {
  background-color : var(--primaryHover);
  }
`;
const Button = ({ text, action }) => {
  return (
    <MaiButton className="rounded-pill px-3 py-1" onClick={action}>
      {text}
    </MaiButton>
  );
};

export default Button;
