import type { FC } from 'react';

import { CHECKOUT, CHECKOUT_FILE, TRIAL_INCLUDES } from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { Divider } from '@/shared/ui/divider';
import { DocumentPlaceholder } from '@/shared/ui/documentPlaceholder';
import { CheckIcon } from '@/shared/ui/icons';
import { PriceWithSup } from '@/shared/ui/priceWithSup';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { PaymentMethods } from '../components/paymentMethods';
import { SecuredPaymentNote } from '../components/securedPaymentNote';
import { TrustBadges } from '../components/trustBadges';
import {
  CheckoutColumns,
  Content,
  FileName,
  FilePdfSuffix,
  FileReadyCard,
  FileReadyInfo,
  FileReadyThumbnail,
  FileReadyTitle,
  IncludesCard,
  IncludesItem,
  IncludesList,
  IncludesTitle,
  IncludesTotalRow,
  PaymentCard,
  PaymentColumn,
  SideColumn,
  TotalDuePrice,
  TotalDueRow,
  TotalDueTitle,
} from './groupA.styles';

/** Group A — default checkout screen (control). */
export const GroupA: FC = () => {
  const trialPrice = formatPlanPrice(CHECKOUT.trialPriceCents);

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <CheckoutColumns>
          <PaymentColumn>
            <PaymentCard>
              <TotalDueRow>
                <TotalDueTitle>Total due today:</TotalDueTitle>
                <TotalDuePrice data-testid="total-due-price">
                  <PriceWithSup price={trialPrice} />
                </TotalDuePrice>
              </TotalDueRow>
              <PaymentMethods layout="stacked" />
              <CheckoutDisclaimer variant="full" />
              <TrustBadges badges={['cancel-anytime', 'support', 'users']} />
            </PaymentCard>
            <SecuredPaymentNote />
          </PaymentColumn>

          <SideColumn>
            <FileReadyCard data-testid="file-ready-card">
              <FileReadyInfo>
                <FileReadyTitle>Your file is ready!</FileReadyTitle>
                <FileName>
                  {CHECKOUT_FILE.longFileName.replace('.pdf', '')}
                  <FilePdfSuffix>pdf</FilePdfSuffix>
                </FileName>
              </FileReadyInfo>
              <FileReadyThumbnail>
                <DocumentPlaceholder />
              </FileReadyThumbnail>
            </FileReadyCard>

            <IncludesCard data-testid="trial-includes-card">
              <IncludesTitle>Your 7-day trial includes:</IncludesTitle>
              <IncludesList>
                {TRIAL_INCLUDES.map((item) => (
                  <IncludesItem key={item.text} $bold={item.isBold}>
                    <CheckIcon />
                    {item.text}
                  </IncludesItem>
                ))}
              </IncludesList>
              <Divider />
              <IncludesTotalRow>
                <span>Total due today:</span>
                <b data-testid="includes-total-price">{trialPrice}</b>
              </IncludesTotalRow>
            </IncludesCard>
          </SideColumn>
        </CheckoutColumns>
      </Content>
    </>
  );
};
