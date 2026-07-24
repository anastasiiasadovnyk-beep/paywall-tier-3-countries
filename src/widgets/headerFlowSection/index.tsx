import type { FC } from 'react';

import logoPdfLeader from '@/shared/ui/assets/logo-pdfleader.svg';

import { FlowSteps } from './flowSteps';
import { Header, Logo, MobileHeader, MobileLogo } from './styles';

interface IHeaderFlowSectionProps {
  /** Index of the current step (0 = Add payment details). */
  activeStep?: number;
}

/**
 * Funnel header: PDFLeader logo on the left, numbered checkout steps on
 * the right. Mirrors the headerFlowSection widget of the main app.
 */
export const HeaderFlowSection: FC<IHeaderFlowSectionProps> = ({ activeStep = 0 }) => {
  return (
    <>
      <MobileHeader>
        <MobileLogo src={logoPdfLeader} alt="PDFLeader logo" />
      </MobileHeader>
      <Header>
        <Logo src={logoPdfLeader} alt="PDFLeader logo" width={215} height={48} />
        <FlowSteps activeStep={activeStep} />
      </Header>
    </>
  );
};

export { FlowSteps };
