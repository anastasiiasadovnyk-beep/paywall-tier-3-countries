import styled from 'styled-components';
import { Button } from '@universe-forma/ui-pes';

export const StyledContinueButton = styled(Button)`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  @media (max-width: 760px) {
    padding: 16px 18px;
    height: 52px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    gap: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
