import styled from 'styled-components';

const NumberSelector = ({selectedNumer, setSelectedNumber, error, setError}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value)=>{
        setError("");
        setSelectedNumber(value);
    }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
      <div className="flex">
      {
        arrNumber.map((value, i) => (<Box 
            isSelected = {
                value === selectedNumer
            }
            key={i}
            onClick={() => {
                numberSelectorHandler(value);
            }}
            >
                {value}
                </Box>))
      }
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    .error{
        height: 40px;
        margin-bottom: 10px;
        color: red;
    }
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
        text-align: end;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    cursor: pointer;
`
