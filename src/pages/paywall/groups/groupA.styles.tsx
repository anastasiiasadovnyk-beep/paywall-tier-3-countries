import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 0 112px;
  margin-top: 24px;

  @media (max-width: 1200px) {
    padding: 0 40px;
  }

  @media (max-width: 760px) {
    padding: 0 16px;
    margin-top: 16px;
  }
`;

export const CheckoutColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 64px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

export const PaymentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1.2;
  max-width: 640px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: none;
  }
`;

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px;
  border-radius: var(--radius-3);
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  @media (max-width: 760px) {
    padding: 20px 16px;
    gap: 20px;
  }
`;

export const TotalDueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const TotalDueTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;

  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const TotalDuePrice = styled.div`
  color: var(--Text-text_primary, var(--color-primary));
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  white-space: nowrap;

  sup {
    font-size: 24px;
    line-height: 1;
    vertical-align: top;
    position: relative;
    top: 2px;
  }

  @media (max-width: 760px) {
    font-size: 28px;
    line-height: 36px;

    sup {
      font-size: 18px;
    }
  }
`;

export const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  max-width: 520px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: none;
    gap: 16px;
  }
`;

export const FileReadyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 20px 24px;
  border-radius: var(--radius-4);
  background: var(--Background-bg_white, #fff);
  /* Same border as the group D preview panel: thin dashed stroke with
     long dashes (CSS dashed borders can't set dash length, so the
     border is an SVG stroke). Color mirrors --color-primary (#4988fc);
     rx mirrors --radius-4 (32px). */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='32' ry='32' stroke='%234988FC' stroke-width='2' stroke-dasharray='14 10'/%3e%3c/svg%3e");
`;

export const FileReadyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const FileReadyTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;

export const FileName = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FilePdfSuffix = styled.span`
  color: var(--Text-text_primary, var(--color-primary));
  font-weight: 700;
`;

export const FileReadyThumbnail = styled.div`
  /* Small full A4 page — sized so the card stays compact. */
  width: 120px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 104px;
  }

  @media (max-width: 760px) {
    width: 96px;
  }
`;

export const IncludesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 28px;
  border-radius: var(--radius-3);
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  @media (max-width: 760px) {
    padding: 20px 16px;
  }
`;

export const IncludesTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;

export const IncludesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const IncludesItem = styled.div<{ $bold?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 15px;
  font-weight: ${({ $bold }) => ($bold ? '700' : '500')};
  line-height: 20px;

  svg {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    flex-shrink: 0;
    fill: var(--Text-text_default, #393939);
  }
`;

export const IncludesTotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;

  b {
    font-size: 24px;
    line-height: 30px;
    font-weight: 800;
  }
`;
