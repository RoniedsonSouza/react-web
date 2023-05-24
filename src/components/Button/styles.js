import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
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
  -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.875rem;
    line-height: 1.45;
    letter-spacing: 0.02857em;
    vertical-align: middle;

  :hover{
    background-color: rgb(14 213 159 / 89%);
  }

  :disabled{
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    background-color: #229778;
    border-bottom: 4px solid rgb(10 114 87);
  }

  span{
    display: inherit;
    margin-right: 8px;
    margin-left: -4px;
  }

  span svg{
    font-size: 20px;
    display: inline-block;
    fill: currentColor;
  }
`;