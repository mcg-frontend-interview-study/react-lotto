import * as Styled from './StatisticsModal.style';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { ClickOutsideDetector } from '../ClickOutsideDetector/ClickOutSideDetector';

type StatisticsModalProps = {
  close: () => void;
};

export const StatisticsModal = ({ close }: StatisticsModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  return createPortal(
    <Styled.DimmedLayer>
      <ClickOutsideDetector targetRef={modalRef} onClickOutside={close}>
        <Styled.Modal ref={modalRef}>
          <Styled.CloseButton onClick={close}>X</Styled.CloseButton>
        </Styled.Modal>
      </ClickOutsideDetector>
    </Styled.DimmedLayer>,
    document.body,
  );
};
