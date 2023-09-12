import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);//

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  useEffect(() => {       //This callback function will be triggered whenever the user resizes the browser window.
    window.addEventListener("resize", currentScreenWidth); // purpose of setting up an event listener for the "resize" event is to make your React component responsive to changes in the browser window's size.
    return () => {
      window.removeEventListener("resize", currentScreenWidth); // this line refers when we resize the current width the previous width are removed nd curent are there
    };                                                            // the remove part is known as clearnup function
  });
  return (
    <Wrapper>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
    </Wrapper>
  );
};
ClearUp;
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;

export default ClearUp;