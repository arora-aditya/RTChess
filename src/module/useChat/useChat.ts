import { useCallback } from 'react';
import shortid from 'shortid';

import { MessageType, MessageTextType, MessageChessType } from '../../types/MessageType';
import { usePeerConnection, usePeerConnectionSubscription } from '../PeerConnection/PeerConnection';
import { MESSAGE_SENDER } from '../../types/MessageSenderEnum';
import { MESSAGE_TYPE } from '../../types/MessageTypeEnum';
import { useChatMessages } from '../ChatMessages/ChatMessages';
import { ChatMessageType } from '../../types/ChatMessageType';

export const useChat = () => {
  const { chatMessages, sendChatMessage } = useChatMessages();

  const {
    mode,
    isConnected,
    localConnectionDescription,
    startAsHost,
    startAsSlave,
    setRemoteConnectionDescription,
    sendMessage,
  } = usePeerConnection<ChatMessageType>();

  const sendTextChatMessage = useCallback(
    (messageText: string) => {
      const message: MessageTextType = {
        id: shortid.generate(),
        sender: MESSAGE_SENDER.STRANGER,
        type: MESSAGE_TYPE.TEXT,
        timestamp: +new Date(),
        payload: messageText,
      };

      sendMessage(message);
      sendChatMessage({
        id: message.id,
        sender: MESSAGE_SENDER.ME,
        timestamp: message.timestamp,
        text: message.payload,
      });
    },
    [sendMessage, sendChatMessage],
  );
  
  const sendChessMessage = useCallback(
    (fen: string) => {
      const message: MessageChessType = {
        id: shortid.generate(),
        sender: MESSAGE_SENDER.STRANGER,
        type: MESSAGE_TYPE.CHESS,
        timestamp: +new Date(),
        payload: fen,
      };

      sendMessage(message);
    },
    [sendMessage],
  );

  return {
    mode,
    isConnected,
    localConnectionDescription,
    chatMessages,
    startAsHost,
    startAsSlave,
    setRemoteConnectionDescription,
    sendTextChatMessage,
    sendChessMessage,
  };
};

// This hook should be used only in one place since it's connecting Chat to PeerConnection
export const useChatPeerConnectionSubscription = (setFen: (fen: string) => any) => {
  const { sendChatMessage } = useChatMessages();

  const onMessageReceived = useCallback(
    (message: MessageType) => {
      if (message.type === MESSAGE_TYPE.TEXT) {
        sendChatMessage({
          id: message.id,
          sender: MESSAGE_SENDER.STRANGER,
          timestamp: message.timestamp,
          text: message.payload,
        });
      } else if (message.type === MESSAGE_TYPE.CHESS) {
        setFen(message.payload);
      }
    },
    [sendChatMessage, setFen],
  );

  usePeerConnectionSubscription(onMessageReceived);
};
