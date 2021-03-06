import React, { FC, memo } from 'react';
import styled from 'styled-components';

import { MESSAGE_SENDER } from '../../types/MessageSenderEnum';
import { ChatMessageType } from '../../types/ChatMessageType';

const Text = styled.div``;
const Header = styled.div`
  font-weight: bold;
  margin-top: 0.5vh;
  margin-bottom: 0.25vh;
`;
const Message = styled.div`
`;

const ChatTextMessage: FC<Props> = memo(function ChatTextMessage({ chatMessage }) {
  return (
    <Message>
      <Header>
        <span>{chatMessage.sender === MESSAGE_SENDER.ME ? 'Me' : 'Friend'}</span> (
        {new Date(chatMessage.timestamp).toLocaleTimeString()})
      </Header>
      <Text>{chatMessage.text}</Text>
    </Message>
  );
});

interface Props {
  chatMessage: ChatMessageType;
}

export const ChatMessage: FC<Props> = memo(function ChatMessage({ chatMessage }) {
  return <ChatTextMessage chatMessage={chatMessage} />;
});
