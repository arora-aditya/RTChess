import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { useChat } from '../../module/useChat/useChat';
import { ChatMessage } from './ChatMessage';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';

const MessageButton = styled(Button)`
  max-width: 10vh;
  margin-top: 1vh;
  align-self: flex-end;
`;
const MessageTextArea = styled(TextArea)`
`;
const MessageForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const MessagesInnerContainer = styled.div`
`;
const MessagesContainer = styled.div`
  overflow: auto; 
  display: flex; 
  max-height: 10vh;
  width: 80vw;
  @media (min-width: 768px) {
    max-height: 550px;
    width: 20vw;
  }
  flex-direction: column-reverse;
`;
const Container = styled.div`
`;

interface ChatProps {
  canRestart: boolean;
  doRestart: () => any;
}

export const Chat = function Chat({
   canRestart, doRestart
}: ChatProps) {
  const { chatMessages, sendTextChatMessage } = useChat();
  const [messageToSend, setMessageToSend] = useState<string>('');
  const formRef = useRef<HTMLFormElement>();

  const send = useCallback(() => {
    sendTextChatMessage(messageToSend);
    setMessageToSend('');
  }, [sendTextChatMessage, messageToSend, setMessageToSend]);

  const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setMessageToSend(event.target.value);
    },
    [setMessageToSend],
  );

  const handleTextAreaKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      if ((event.which !== 13 && event.keyCode !== 13) || event.shiftKey) return;
      if (!formRef.current) return;

      event.preventDefault();
      event.stopPropagation();
      send();
    },
    [send],
  );

  const handleSubmit: React.FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      send();
    },
    [send],
  );

  return (
    <Container>
      <MessagesContainer>
        <MessagesInnerContainer>
          {chatMessages.map((chatMessage) => (
            <ChatMessage key={chatMessage.id} chatMessage={chatMessage} />
          ))}
        </MessagesInnerContainer>
      </MessagesContainer>
      <MessageForm ref={formRef as React.MutableRefObject<HTMLFormElement>} onSubmit={handleSubmit}>
        <MessageTextArea
          placeholder="Message..."
          value={messageToSend}
          onChange={handleTextAreaChange}
          onKeyDown={handleTextAreaKeyDown}
        />
        <MessageButton type="submit">Send</MessageButton>
        {canRestart && <MessageButton onClick={doRestart}>Restart</MessageButton>}
      </MessageForm>
    </Container>
  );
};
