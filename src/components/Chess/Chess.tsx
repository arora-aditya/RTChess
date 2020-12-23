import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components';
import Chessboard from 'chessboardjsx';
import useValidator from '../../module/useValidator/useValidator';
import {ChessInstance, Square} from 'chess.js';
import FenParser from '@chess-fu/fen-parser';
import { Chat } from '../Chat/Chat';
import { useChat } from '../../module/useChat/useChat';

interface ChessBoardProps {
    game: ChessInstance, 
    fen: string, 
    setFen:React.Dispatch<React.SetStateAction<string>>,
    position: string , 
    onDropOption?: ({ sourceSquare, targetSquare }: { sourceSquare: Square; targetSquare: Square; }) => void, 
    onClickOption?: (square: Square) => void,
    options:Boolean ,
    orientation: "white" | "black",
    botmatch?: boolean,
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

export function ChessBoard({
   game, fen, setFen, position = "start", onDropOption, onClickOption, options = false, orientation
}: ChessBoardProps
    ){
    const { sendChessMessage } = useChat();
    game.load(position);
    const { 
         onMouseOverSquare, 
         onMouseOutSquare,
         onDragOverSquare, 
         onSquareClick,
         dropStyle,
         squareStyles,
         onDrop
       } = useValidator(game, fen, setFen, orientation); 

    const [width, setWidth] = React.useState<number>(window.innerWidth);
    
    const send = useCallback(() => {
      sendChessMessage(position);
    }, [sendChessMessage, position]);
    
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
    
    useEffect(()=>{
      const parsed = new FenParser(position);
      if(orientation[0] !== parsed.turn){
        send()
      }
    }, [position, orientation, send])
    
    return (
      <Container>
        <BoardWrapper>
          <Chessboard 
            id="humanvshuman"
            boardStyle={boardStyle} 
            calcWidth={resizeBoard} 
            position={position}
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
          <Chat />
        </BoardWrapper>
      </Container>
    )
}

