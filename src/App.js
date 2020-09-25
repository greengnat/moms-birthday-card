import React, { useState } from "react";
import styled from "styled-components";
import max from "./images/0.jpg";
import speachBubble from "./images/speachbubble.png";
import GlobalStyle from "./theme.js";

const Background = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const BgImg = styled.div`
  position: relative;
  background-image: url(${max});
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
`;

const MessageContainer = styled.div`
  display: ${(props) => (props.display === true ? "flex" : "none")};
  position: absolute;
  top: 8rem;
  left: 20rem;
  background-image: url(${speachBubble});
  background-size: contain;
  height: 40vh;
  width: 40vh;
`;

const Message = styled.div`
  display: ${(props) => (props.display === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 4rem;
  transition: all 0.3s;
  font-weight: 600;
  font-family: "Comic Neue", cursive;
  transform: translateY(-3rem);
`;

const ClickMe = styled.button`
  position: absolute;
  left: 40vw;
  top: 25vh;
  display: ${(props) => (props.display === true ? "none" : "flex")};
  height: 4rem;
  width: 7rem;
  border: none;
  transition: 0.3s;
  background-color: transparent;
  font-size: 4rem;
  font-family: "Comic Neue", cursive;
  cursor: pointer;
  color: #fff;
  filter: glow(color=#EEEE00, strength=3);
  text-shadow: #eeee00 0 0 10px;

  &:hover {
    transform: translateY(-0.7rem);
  }
  &:active {
    transform: translateY(0rem);
  }
  }
`;

function App() {
  const [displayBdayMsg, setDisplayBdayMsg] = useState(false);

  const handleDisplayBdayMsg = () => {
    setDisplayBdayMsg(true);
  };

  return (
    <div>
      <Background>
        <GlobalStyle></GlobalStyle>
        <BgImg>
          <ClickMe display={displayBdayMsg} onClick={handleDisplayBdayMsg}>
            Click Me
          </ClickMe>
          <MessageContainer display={displayBdayMsg}>
            <Message display={displayBdayMsg}>Happy Birthday Mom!</Message>
          </MessageContainer>
        </BgImg>
      </Background>
    </div>
  );
}

export default App;
