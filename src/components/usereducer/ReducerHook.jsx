import { useReducer } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import reducer from "./reducer";

const initialValue = 0;

const ReducerHook = () => {
  const [count, setCount] = useState(0); // the reducer - it sends the type of action to the reducer function to perform its job,which of course ,is updating the state

  // const [count, dispatch] = useReducer(reducer, initialValue);

  return (                  // in line18- when click the button so what would be want the opteration or which amount data want to perform operation
    <>
      <Wrapper>
        <div className="container"> 
          <button onClick={() => dispatch({ type: "INC" })}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>    
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ReducerHook;