import React, { useState, createRef, FC, memo } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { encode, decode } from '../../util/connectionDescriptionEncoding';
import { connectionDescriptionValidator } from '../../util/connectionDescriptionValidator';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import { useChat } from '../../module/useChat/useChat';
import { ConnectionDescription } from '../../module/PeerConnection/PeerConnection';

const ErrorMessage = styled.div``;
const StyledTextArea = styled(TextArea)`
  margin-bottom: 1vh;
`;
const ConnectButton = styled(Button)`
`;
const CopyButton = styled(Button)`
  width: 70%;
  margin-top: 4px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Instruction = styled.div`
  color: black;
  margin-bottom: 1vh;
  margin-top: 1vh;
`;
const Step = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 2vh;
  height: 2vh;
  background-color: black;
  color: white;
  border-radius: 50%;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  > span {
    display: inline-block;
    // transform: translate(-0.2vh, -0.2vh);
  }
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-top: none;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1.5vh;
  flex-direction: column;
  justify-content: space-around;
`;

export interface HostProps {
  connectionDescription: ConnectionDescription;
  onSubmit: (remoteConnectionDescription: ConnectionDescription) => any;
}

export const Host: FC = memo(function Host() {
  const { localConnectionDescription, setRemoteConnectionDescription } = useChat();
  const [remoteConnectionDescriptionInputValue, setRemoteConnectionDescriptionInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const copyTextAreaRef = createRef<HTMLTextAreaElement>();

  const encodedConnectionDescription = encode(localConnectionDescription as ConnectionDescription);

  const handleCopyClick = () => {
    if (!copyTextAreaRef.current) return;

    copyTextAreaRef.current.select();
    copy(encodedConnectionDescription);
  };

  const handleRemoteConnectionDescriptionInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setError('');
    setRemoteConnectionDescriptionInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    try {
      event.stopPropagation();
      event.preventDefault();
      const connectionDescriptionObject = decode(remoteConnectionDescriptionInputValue);
      if (connectionDescriptionValidator(connectionDescriptionObject)) throw new Error();
      setRemoteConnectionDescription(connectionDescriptionObject as ConnectionDescription);
    } catch (error) {
      setError('Connection Description invalid!');
    }
  };

  return (
    <Container>
      <Card>
        <Step>
          <span>1</span>
        </Step>
        <Instruction>Send this code to your buddy:</Instruction>
        <StyledTextArea ref={copyTextAreaRef} value={encodedConnectionDescription} readOnly />
        <Button onClick={handleCopyClick}>Copy to clipboard</Button>
      </Card>
      <Card>
        <Step>
          <span>2</span>
        </Step>
        <Form onSubmit={handleSubmit}>
          <Instruction>Code from your buddy:</Instruction>
          <StyledTextArea
            value={remoteConnectionDescriptionInputValue}
            onChange={handleRemoteConnectionDescriptionInputChange}
            placeholder="Paste an answer code"
          />
          <Button type="submit">Connect</Button>
        </Form>
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Card>
    </Container>
  );
});
