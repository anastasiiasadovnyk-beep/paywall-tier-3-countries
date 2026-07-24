import styled from 'styled-components';

/* PDFLeader's success green (also used by the main app's file preview). */
const PROGRESS_GREEN = '#20c55b';

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

export const DownloadPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 36px 44px;
  border-radius: var(--radius-3);
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  @media (max-width: 760px) {
    padding: 20px 16px;
    gap: 16px;
  }
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (max-width: 760px) {
    gap: 12px;
  }
`;

export const FileThumbnail = styled.div`
  width: 90px;
  flex-shrink: 0;

  @media (max-width: 760px) {
    width: 64px;
  }
`;

export const FileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const FileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  min-width: 0;

  @media (max-width: 760px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const PdfChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border-radius: var(--radius-1);
  background: var(--color-error-main, #f23030);
  color: var(--color-common-white, #fff);
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
`;

export const FileMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 18px;
    gap: 8px;
  }
`;

export const ProgressBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const ProgressPercent = styled.div`
  /* Same treatment as the group D progress value. */
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  flex-shrink: 0;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ProgressTrack = styled.div`
  flex: 1;
  height: 12px;
  border-radius: var(--radius-8);
  /* Light-grey track so it stays visible on the white panel. */
  background: var(--color-bg-light-grey, #f5f5f7);
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: var(--radius-8);
  background: ${PROGRESS_GREEN};
  transition: width 1.2s ease-out;
`;

export const TrustRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  b {
    font-weight: 700;
  }

  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 18px;
    gap: 10px;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
