import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 20px;
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  background-color: #1DD1A1;
  color: black;
  font-weight: 600;
  font-size: 14px;
  max-width: 350px;
  border-bottom: 4px solid #229778;

  :hover{
    border-bottom: 2px solid #229778;
  }

  :disabled{
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    background-color: #229778;
    border-bottom: 4px solid rgb(10 114 87);
  }
`;