import styled from "styled-components";
export const Button = styled.button`
  border: none;
  width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s all ease-in;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s all ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  transition: 0.3s all ease-in;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: 0.2s all ease-in;
  }
`;
