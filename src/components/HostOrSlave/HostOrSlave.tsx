import React, { FC, useState, MouseEventHandler, ChangeEventHandler, FormEventHandler, memo } from 'react';
import styled from 'styled-components';

import { connectionDescriptionValidator } from '../../util/connectionDescriptionValidator';
import { decode } from '../../util/connectionDescriptionEncoding';
import { Button } from '../Button/Button';
import { TextArea } from '../TextArea/TextArea';
import { useChat } from '../../module/useChat/useChat';
import { ConnectionDescription } from '../../module/PeerConnection/PeerConnection';

const InvitationTextArea = styled(TextArea)`
  width: 100px;
`;

const SlaveButton = styled(Button)`
  width: 100px;
  margin-top: 4px;
`;
const ErrorMessage = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const ModalHalf = styled.div`
  font-size: 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 1vh;
    width: fit-content;
  }
  hr {
    width: 90%;
  }
  textarea {
  }
`;

const Or = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 4vh;
  height: 4vh;
  font-size: 1.5vh;
  background-color: black;
  color: white;
  border-radius: 50%;
  transform: translate(0px, -2.5vh);
  > span {
    transform: translate(0.5px, -1.5px);
    line-height: 1;
  }
`

export const HostOrSlave: FC = memo(function HostOrSlave() {
  const { startAsHost, startAsSlave } = useChat();
  const [connectionDescription, setConnectionDescription] = React.useState<string>('');
  const [error, setError] = useState<string>('');

  const handleHostBtnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    startAsHost();
  };

  const handleConnectionDescriptionInputChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setError('');
    setConnectionDescription(event.target.value);
  };

  const handleSlaveFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const connectionDescriptionObject = decode(connectionDescription);
      if (connectionDescriptionValidator(connectionDescriptionObject)) throw new Error();
      startAsSlave(connectionDescriptionObject as ConnectionDescription);
    } catch (error) {
      setError('Connection Description invalid!');
    }
  };

  return (
      <ModalContainer>
        <ModalHalf>
          <Button onClick={handleHostBtnClick}>Start new</Button>
        </ModalHalf>
        <ModalHalf>
          <hr />  
          <Or><span>or</span></Or>
        </ModalHalf>
        <ModalHalf>
        <Form onSubmit={handleSlaveFormSubmit}>
          <InvitationTextArea 
            value={connectionDescription}
            onChange={handleConnectionDescriptionInputChange}
            placeholder="Paste invitation code here..."/>
            {!!error && <ErrorMessage>{error}</ErrorMessage>}
            <SlaveButton type="submit">Join</SlaveButton>
          </Form>
        </ModalHalf>
      </ModalContainer>
  );
});
