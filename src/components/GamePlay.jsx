import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import NumberSelector from "./NumberSelector";
import { Button, OutlineButton } from "./Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumer, setSelectedNumber] = useState(undefined);
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("");
  const generateRandomNumer = () => {
    return Math.floor(Math.random() * (7 - 1) + 1);
  };

  const rollDice = () => {
    if (!selectedNumer){
      setError("You have not selected any number")
      return
    }
    setError("");
    const randomNumber = generateRandomNumer();
    setCurrentDice(randomNumber);
    if (selectedNumer === randomNumber) {
      setScore(score + randomNumber);
    } else {
      setScore(score - 2);
    }
    setSelectedNumber(undefined);
  };

  

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error = {error}
          setError = {setError}
          selectedNumer={selectedNumer}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
      />
      <div className="btns">
        <OutlineButton
        onClick={()=>{setScore(0)}}>Reset Score</OutlineButton>
        <Button
        onClick={()=>{setShowRules(prev => !prev)}}>{showRules ? "Hide " : "Show "}Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  .top-section {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .btns{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
`;
