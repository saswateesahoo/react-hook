import React, { useState, useMemo } from "react";
import styled from "styled-components";

const MemoHook = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false); // here the 2nd button when clicked thn here value show,setshow) toggle means if true thn "you clicked me " if false "click me plzz"

  const getValue = () => {
    return setMyNum(myNum + 1); // here is 1st button tag(22) when click then there getvalue function call here line 8 nd mynum = state variable
  };
  const countNumber = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num; // here ,whenever the mynum function value is getting updated thn this function will be worked means work bt in latetym
  };

  const CheckData = useMemo(() => {   // this is a callback function and ary dependices mynum
    return countNumber(myNum);
  }, [myNum]);

  return ( // in 22 line we have 1 button nd 1 paragraph  nd another button tag 
    <Wrapper> 
      <button onClick={getValue} style={{ backgroundColor: "red" }}> 
        Counter
      </button>
      <p> My new number : {CheckData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.4rem;
`;

export default MemoHook;