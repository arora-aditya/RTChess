import React, { memo, FC } from 'react';
import styled from 'styled-components';

import { Chat } from './components/Chat/Chat';
import { HostOrSlave } from './components/HostOrSlave/HostOrSlave';
import { Host } from './components/Host/Host';
import { Slave } from './components/Slave/Slave';
import { useChat, useChatPeerConnectionSubscription } from './module/useChat/useChat';
import { PEER_CONNECTION_MODE } from './module/PeerConnection/PeerConnection';

const InnerWrapper = styled.div`
`;
const Wrapper = styled.div`
`;

const App: FC = memo(function App() {
  const { mode, isConnected } = useChat();
  useChatPeerConnectionSubscription();

  return (
    <Wrapper>
      <InnerWrapper>
        {!mode && <HostOrSlave />}
        {mode === PEER_CONNECTION_MODE.HOST && !isConnected && <Host />}
        {mode === PEER_CONNECTION_MODE.SLAVE && !isConnected && <Slave />}
        {mode && isConnected && <Chat />}
      </InnerWrapper>
    </Wrapper>
  );
});

export default App;
