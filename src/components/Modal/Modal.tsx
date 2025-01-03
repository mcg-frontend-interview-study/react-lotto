import * as S from './Modal.styled';
import { createPortal } from 'react-dom';

interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
}

function Modal({ children, isOpen }: ModalProps) {
  const portalElement = document.getElementById('modal') as HTMLElement;

  if (!portalElement) {
    console.error('Portal이 안열림');
  }

  const modalLayout = (
    <S.Layout>
      <S.Backdrop />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Layout>
  );

  return isOpen && createPortal(modalLayout, portalElement);
}

export default Modal;
