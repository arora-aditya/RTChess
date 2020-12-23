import React, { useCallback, memo, FC, useRef, useState } from 'react';
import styled from 'styled-components';

import { useChat } from '../../module/useChat/useChat';
import { ChatMessage } from './ChatMessage';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';

const MessageButton = styled(Button)`
`;
const MessageTextArea = styled(TextArea)`
`;
const MessageForm = styled.form`
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

export const Chat: FC = memo(function Chat() {
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
      </MessageForm>
    </Container>
  );
});
