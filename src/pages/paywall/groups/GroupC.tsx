import { type FC, useEffect, useRef, useState } from 'react';

import { CHECKOUT, CHECKOUT_FILE } from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { Divider } from '@/shared/ui/divider';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CardPaymentForm } from '../components/cardPaymentForm';
import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { DownloadPanel } from '../components/downloadPanel';
import { PaymentMethods } from '../components/paymentMethods';
import { SecuredPaymentNote } from '../components/securedPaymentNote';
import {
  Content,
  DisclaimerContainer,
  Subtitle,
  Title,
  TotalDuePrice,
  TotalDueRow,
  TotalDueTitle,
  TrialCaption,
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

        <DownloadPanel
          fileName={CHECKOUT_FILE.longFileName}
          progressPercent={CHECKOUT_FILE.progressPercentC}
        />

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
