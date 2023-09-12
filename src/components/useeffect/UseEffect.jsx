import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const UseEffect = () => {
  const [count, setCount] = useState(0); // this line refers that whenver  the we are update the setcount nd button is clicked the page is rerender nd count chng 

  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };

  useEffect(() => {
    document.title = count; // count is state variable nd  it declar in h1 tag below
  }, [count]); // this useeffect hook function always run on each render . means whenever setcount(line7) update that time always side by side runs the useeffect . nd no need dependancy

  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={() => countUpdate("inc")}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={() => countUpdate("dec")}>
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

export default UseEffect;