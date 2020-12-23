import React, { useState, memo, FC } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ChessBoard } from './components/Chess/Chess';
import * as ChessJS from "chess.js";
import { HostOrSlave } from './components/HostOrSlave/HostOrSlave';
import { Host } from './components/Host/Host';
import { Slave } from './components/Slave/Slave';
import { useChat, useChatPeerConnectionSubscription } from './module/useChat/useChat';
import { PEER_CONNECTION_MODE } from './module/PeerConnection/PeerConnection';

import message from './assets/message_undraw.svg';
import share from './assets/share_undraw.svg';

const InnerWrapper = styled.div`
`;
const Wrapper = styled.div`
`;


type FlexContainerProps = {
  reversed?: boolean;
};

const FlexContainer = styled.div<FlexContainerProps>`
  margin-left: 5%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-items: space-between;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: ${props => props.reversed ? "row-reverse" : "row"}
  }
  img {
    width: 80%;
    @media (min-width: 768px) {
      width: 70%;
    }
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 60%;
  }
  font-size: 2vh;
  margin: 2vh;
  margin-left: 5vh;
  margin-bottom: 5vh;
  font-weight: 900;
  @media only screen and (max-width: 900px){
    width: 70%;
  }
`;
const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;
const game = new Chess();
const App: FC = memo(function App() {
  const { mode, isConnected } = useChat();
  const [isModalOpen, setModalOpen] = useState(false);
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  
  useChatPeerConnectionSubscription((a: string) => {
    game.load(a);
    setFen(a);
  });
  return (
    <Wrapper>
      <Header onClickButton={() => setModalOpen(true)} hideButton={isConnected}/>
      {!isConnected && 
        <InnerWrapper>
          <FlexContainer>
            <TextContainer>
              Serverless Chess with friends with the ability to analyse and share games!
            </TextContainer>
            <img src={message} alt="people messaging on phone drawing"/>
          </FlexContainer>
          <FlexContainer reversed={true}>
            <TextContainer>
              Simply share the invite codes between devices and instantly start playing!<br/>
              No data recorded anywhere!
            </TextContainer>
            <img src={share} alt="sharing drawing"/>
          </FlexContainer>
          <Modal
            style={{content: {
              height: "50%", 
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              padding: '3vh 3vh',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'}}}
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="Start New or Join"
          >
              {!mode && <HostOrSlave />}
              {mode === PEER_CONNECTION_MODE.HOST && !isConnected && <Host />}
              {mode === PEER_CONNECTION_MODE.SLAVE && !isConnected && <Slave />}
          </Modal>
        </InnerWrapper>
        
      }
      {mode && isConnected && 
        <InnerWrapper>
          <ChessBoard game={game} fen={fen} setFen={setFen} orientation={mode === PEER_CONNECTION_MODE.HOST ? "white" : "black"} options={false} position={fen}/>
        </InnerWrapper>
      }
      <Footer />
    </Wrapper>
  );
});

export default App;

// {!mode && <HostOrSlave />}
// {mode === PEER_CONNECTION_MODE.HOST && !isConnected && <Host />}
// {mode === PEER_CONNECTION_MODE.SLAVE && !isConnected && <Slave />}
// {mode && isConnected && <Chat />}