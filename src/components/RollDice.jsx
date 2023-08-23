import React from "react";
import styled from "styled-components";
import dice_1 from "../assets/dice/dice_1.svg";
import dice_2 from "../assets/dice/dice_2.svg";
import dice_3 from "../assets/dice/dice_3.svg";
import dice_4 from "../assets/dice/dice_4.svg";
import dice_5 from "../assets/dice/dice_5.svg";
import dice_6 from "../assets/dice/dice_6.svg";

const RollDice = ({currentDice, rollDice}) => {

  
  const getImage = () => {
    if (currentDice == 1) {
      return dice_1;
    } else if (currentDice == 2) {
      return dice_2;
    } else if (currentDice == 3) {
      return dice_3;
    } else if (currentDice == 4) {
      return dice_4;
    } else if (currentDice == 5) {
      return dice_5;
    } else if (currentDice == 6) {
      return dice_6;
    }
  };

  return (
    <DiceContainer>
      <div onClick={() => {rollDice()}} className="dice">
        <img src={getImage()} alt="dice_image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
    img {
      &:active {
        transform: scale(0.95);
      }
    }
  }
  p {
    font-size: 24px;
  }
`;
