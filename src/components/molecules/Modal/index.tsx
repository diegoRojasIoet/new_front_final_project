import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background: rgba(32, 35, 41, 0.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>
}

export { Modal };