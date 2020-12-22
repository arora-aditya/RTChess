import React, { FC, createRef, memo } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { encode } from '../../util/connectionDescriptionEncoding';
import { Button } from '../Button/Button';
import { TextArea } from '../TextArea/TextArea';
import { useChat } from '../../module/useChat/useChat';
import { ConnectionDescription } from '../../module/PeerConnection/PeerConnection';

const CopyButton = styled(Button)`
  margin-top: 1vh;
`;
const StyledTextArea = styled(TextArea)`
  width: 70%;
`;
const Instruction = styled.div`
  font-size: 1.5vh;
  color: black;
  margin-bottom: 1vh;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Slave: FC = memo(function Slave() {
  const { localConnectionDescription } = useChat();
  const copyTextAreaRef = createRef<HTMLTextAreaElement>();

  const encodedConnectionDescription = encode(localConnectionDescription as ConnectionDescription);

  const handleCopyClick = () => {
    if (!copyTextAreaRef.current) return;

    copyTextAreaRef.current.select();
    copy(encodedConnectionDescription);
  };

  return (
    <Container>
      <Card>
        <Instruction>Send back this code back to your friend</Instruction>
        <StyledTextArea ref={copyTextAreaRef} value={encodedConnectionDescription} readOnly />
        <CopyButton onClick={handleCopyClick}>Copy to clipboard</CopyButton>
      </Card>
    </Container>
  );
});
