import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play the dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on the dice image</p>
        <p>
          After you click on the dice, if selected number is equal to the dice
          number, you will get same points as dice
        </p>
        <p>If you get wrong guess, then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  border-radius: 24px;
  padding: 20px;
  margin-top: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24x;
    p{
        margin: 10px 0;
      }
  }
  @media (max-width:800px){
    margin: 20px 20px;
    
  }
`;
