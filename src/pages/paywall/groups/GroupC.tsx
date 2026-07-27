import { type FC, useEffect, useRef, useState } from 'react';

import { CHECKOUT, CHECKOUT_FILE } from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { Divider } from '@/shared/ui/divider';
import { DocumentPlaceholder } from '@/shared/ui/documentPlaceholder';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CardPaymentForm } from '../components/cardPaymentForm';
import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { PaymentMethods } from '../components/paymentMethods';
import { SecuredPaymentNote } from '../components/securedPaymentNote';
import { TrustpilotRating } from '../components/trustpilotRating';
import {
  Content,
  DisclaimerContainer,
  DownloadPanel,
  FileDetails,
  FileMeta,
  FileNameRow,
  FileRow,
  FileThumbnail,
  PdfChip,
  ProgressBarRow,
  ProgressFill,
  ProgressPercent,
  ProgressTrack,
  Subtitle,
  Title,
  TotalDuePrice,
  TotalDueRow,
  TotalDueTitle,
  TrialCaption,
  TrustItem,
  TrustRow,
} from './groupC.styles';

/** Group C — checkout with a big download-progress panel. */
export const GroupC: FC = () => {
  const trialPrice = formatPlanPrice(CHECKOUT.trialPriceCents);
  const recurringPrice = formatPlanPrice(CHECKOUT.recurringPriceCents);

  const [isCardFormOpen, setIsCardFormOpen] = useState(false);
  const cardFormRef = useRef<HTMLDivElement>(null);

  // Keep the unfolded form fully on screen — scroll the minimum needed
  // so the user never has to scroll to see the whole dropdown.
  useEffect(() => {
    if (isCardFormOpen) {
      cardFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isCardFormOpen]);

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <Title>Your download is almost complete</Title>
        <Subtitle>It starts the moment your payment goes through</Subtitle>

        <DownloadPanel data-testid="download-panel">
          <FileRow>
            <FileThumbnail>
              <DocumentPlaceholder />
            </FileThumbnail>
            <FileDetails>
              <FileNameRow>
                <PdfChip>PDF</PdfChip>
                {CHECKOUT_FILE.longFileName}
              </FileNameRow>
              <FileMeta>
                <span>{CHECKOUT_FILE.sizeLabel}</span>
                <Divider $orientation="vertical" $length="12px" />
                <span>Converted &amp; ready</span>
              </FileMeta>
            </FileDetails>
          </FileRow>
          <ProgressBarRow>
            <ProgressTrack>
              <ProgressFill style={{ width: `${CHECKOUT_FILE.progressPercentC}%` }} />
            </ProgressTrack>
            <ProgressPercent>{CHECKOUT_FILE.progressPercentC}%</ProgressPercent>
          </ProgressBarRow>
          <TrustRow>
            <TrustpilotRating score={4.8} />
            <Divider $orientation="vertical" $length="18px" />
            <TrustItem>10+ million users</TrustItem>
            <Divider $orientation="vertical" $length="18px" />
            <TrustItem>Cancel anytime</TrustItem>
          </TrustRow>
        </DownloadPanel>

        <TotalDueRow>
          <TotalDueTitle>Total due today</TotalDueTitle>
          <TotalDuePrice data-testid="total-due-price">{trialPrice}</TotalDuePrice>
        </TotalDueRow>

        <PaymentMethods
          layout="grid"
          onCardClick={() => setIsCardFormOpen((isOpen) => !isOpen)}
          isCardExpanded={isCardFormOpen}
          cardDropdown={
            isCardFormOpen ? (
              <CardPaymentForm ref={cardFormRef} onClickOutside={() => setIsCardFormOpen(false)} />
            ) : undefined
          }
        />

        <TrialCaption>
          <span>7-day trial for {trialPrice}</span>
          <Divider $orientation="vertical" $length="14px" />
          <span>Then {recurringPrice} every 4 weeks</span>
          <Divider $orientation="vertical" $length="14px" />
          <span>Cancel anytime</span>
        </TrialCaption>

        <DisclaimerContainer>
          <CheckoutDisclaimer variant="short" align="center" />
        </DisclaimerContainer>

        <SecuredPaymentNote />
      </Content>
    </>
  );
};
