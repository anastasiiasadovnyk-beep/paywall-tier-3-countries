import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1032px;
  padding: 0 40px;
  margin: 40px auto 0;
  gap: 24px;

  @media (max-width: 760px) {
    padding: 0 16px;
    margin-top: 24px;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Subtitle = styled.p`
  color: var(--Text-text_secondary, #757575);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: -12px 0 0;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: -8px;
  }
`;

export const TotalDueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

export const TotalDueTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;

  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const TotalDuePrice = styled.div`
  color: var(--Text-text_primary, var(--color-primary));
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;

  @media (max-width: 760px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const TrialCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--Text-text_secondary, #757575);
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  margin-top: -8px;
`;

export const DisclaimerContainer = styled.div`
  width: 100%;
`;
