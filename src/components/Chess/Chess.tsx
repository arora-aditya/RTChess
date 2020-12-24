import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import Chessboard from 'chessboardjsx';
import useValidator from '../../module/useValidator/useValidator';
import * as ChessJS from "chess.js";
import { Chat } from '../Chat/Chat';
import { useChat } from '../../module/useChat/useChat';

interface ChessBoardProps {
    fen: string, 
    setFen:React.Dispatch<React.SetStateAction<string>>,
    orientation: "white" | "black",
}

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const BoardWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-around;
`;

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;
const game = new Chess();
export function ChessBoard({
   fen, setFen, orientation
}: ChessBoardProps){
    const GAME_START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const { sendChessMessage, sendTextChatMessage } = useChat();
    const [canRestart, setCanRestart] = useState(false);
    const { 
         onMouseOverSquare, 
         onMouseOutSquare,
         onDragOverSquare, 
         onSquareClick,
         dropStyle,
         squareStyles,
         onDrop
       } = useValidator(game, fen, setFen, orientation); 

    const [width, setWidth] = useState<number>(window.innerWidth);
    
    const send = useCallback(() => {
      sendChessMessage(fen);
    }, [sendChessMessage, fen]);
    
    useEffect(()=>{
       window.onresize = () => {
            setWidth(window.innerWidth);
       }
    },[])
    
    const resizeBoard = () =>  width < 700 ? width - 10: 600;
    const boardStyle = { 
        borderRadius: "5px",
        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
    }
    
    useEffect(() => {
      game.load(fen);
    }, [fen])
    
    useEffect(()=>{
      send();
    }, [fen, send])
    
    const doRestart = () => {
      setFen(GAME_START_FEN);
      setCanRestart(false);
      sendTextChatMessage(`Game restarted`);
    }
    
    useEffect(() => {
      if(fen === GAME_START_FEN){
        setCanRestart(false);
      }
    }, [fen])
    
    useEffect(() => {
      const notMyTurn = orientation[0] !== game.turn()
      if(game.game_over()){
        if(game.in_checkmate() && notMyTurn){
          sendTextChatMessage(`Game over ${game.turn() === "w"? "white" : "black"} lost`);
        } else if((game.in_draw() || game.in_threefold_repetition() || game.in_stalemate() || game.insufficient_material()) && notMyTurn){
          sendTextChatMessage(`Game over, it was a draw!`);
        }
        if(fen !== GAME_START_FEN){
          setCanRestart(true);
        }
      }
    }, [fen, sendTextChatMessage])
    
    return (
      <Container>
        <BoardWrapper>
          <Chessboard 
            id="humanvshuman"
            boardStyle={boardStyle} 
            calcWidth={resizeBoard} 
            position={fen}
            onDrop={onDrop}
            onMouseOverSquare={onMouseOverSquare}
            onMouseOutSquare={onMouseOutSquare} 
            onDragOverSquare={onDragOverSquare}
            onSquareClick={onSquareClick}
            squareStyles={squareStyles}
            dropSquareStyle={dropStyle}
            transitionDuration={0}
            orientation={orientation}
          />
          <Chat canRestart={canRestart} doRestart={doRestart}/>
        </BoardWrapper>
      </Container>
    )
}

