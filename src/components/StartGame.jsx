import styled from "styled-components";
import dices from "../assets/dices 1.svg";
import { Button } from "./Button";

export default function StartGame({ toggle }) {
  return (
    <div>
      <Container>
        <img src={dices} alt="" />
        <div className="content">
          <h1>DICE GAME</h1>
          <div>
          <Button onClick={toggle}>Play Now</Button></div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  gap: 100px;
  align-items: center;
  margin: auto;
  height: 100vh;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
  img {
    width: 500px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    .content {
      h1 {
        font-size: 50px;
      }
    }
  }
`;
