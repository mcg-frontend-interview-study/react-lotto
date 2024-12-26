import * as Styled from './StatisticsModal.style';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { ClickOutsideDetector } from '../ClickOutsideDetector/ClickOutSideDetector';
import { Button } from '../Button/Button';

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
          <Styled.Title>🏆 당첨 통계 🏆</Styled.Title>
          <Styled.Table>
            <Styled.HeaderRow>
              <Styled.Column $flex={3}>일치 갯수</Styled.Column>
              <Styled.Column $flex={4}>당첨금</Styled.Column>
              <Styled.Column $flex={3}>당첨 갯수</Styled.Column>
            </Styled.HeaderRow>
            <Styled.Row>
              <Styled.Column $flex={3}>3개</Styled.Column>
              <Styled.Column $flex={4}>5,000</Styled.Column>
              <Styled.Column $flex={3}>n개</Styled.Column>
            </Styled.Row>
            <Styled.Row>
              <Styled.Column $flex={3}>4개</Styled.Column>
              <Styled.Column $flex={4}>50,000</Styled.Column>
              <Styled.Column $flex={3}>n개</Styled.Column>
            </Styled.Row>
            <Styled.Row>
              <Styled.Column $flex={3}>5개</Styled.Column>
              <Styled.Column $flex={4}>1,500,000</Styled.Column>
              <Styled.Column $flex={3}>n개</Styled.Column>
            </Styled.Row>
            <Styled.Row>
              <Styled.Column $flex={3}>5개+보너스볼</Styled.Column>
              <Styled.Column $flex={4}>30,000,000</Styled.Column>
              <Styled.Column $flex={3}>n개</Styled.Column>
            </Styled.Row>
            <Styled.Row>
              <Styled.Column $flex={3}>6개</Styled.Column>
              <Styled.Column $flex={4}>2,000,000,000</Styled.Column>
              <Styled.Column $flex={3}>n개</Styled.Column>
            </Styled.Row>
          </Styled.Table>
          <Styled.Return>당신의 총 수익률은 %입니다.</Styled.Return>
          <Button>다시 시작하기</Button>
        </Styled.Modal>
      </ClickOutsideDetector>
    </Styled.DimmedLayer>,
    document.body,
  );
};
