import styled from "styled-components";
import dices from "../assets/dices 1.svg";
import { Button } from "./Button";

export default function StartGame({toggle}) {
  return (
    <div>
      <Container>
        <img src={dices} alt="" />
        <div className="content">
          <h1>DICE GAME</h1>
          <Button
          onClick={toggle}>Play Now</Button>
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
  margin: 0 auto;
  height: 100vh;
  .content{
    h1{
        font-size:96px;
        white-space: nowrap;
    }
  }
`;

