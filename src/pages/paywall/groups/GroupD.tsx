import type { FC } from 'react';

import {
  CHECKOUT,
  CHECKOUT_FILE,
  TRIAL_TIMELINE,
  UNLOCK_FEATURES,
} from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import featureConvert from '@/shared/ui/assets/features/feature-convert.svg';
import featureEdit from '@/shared/ui/assets/features/feature-edit.svg';
import featureMedia from '@/shared/ui/assets/features/feature-media.svg';
import featureOrganize from '@/shared/ui/assets/features/feature-organize.svg';
import {
  CalendarMonthIcon,
  CheckCircleIcon,
  LockIcon,
  VerifiedUserIcon,
} from '@/shared/ui/icons';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { DownloadPanel } from '../components/downloadPanel';
import { PaymentMethods } from '../components/paymentMethods';
import { PaymentMethodTabs } from '../components/paymentMethodTabs';
import { TrustBadges } from '../components/trustBadges';
import {
  CheckoutColumns,
  Content,
  DesktopBadges,
  DesktopPayments,
  DisclaimerBlock,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  FeatureIllustration,
  FeatureTitle,
  FileCard,
  FileCardTitleRow,
  FileName,
  LeftColumn,
  MobilePanel,
  MobilePayments,
  PageTitle,
  PdfChip,
  PlaceholderPage,
  ProgressFill,
  ProgressPercent,
  ProgressRow,
  ProgressTrack,
  RightColumn,
  TimelineDescription,
  TimelineIcon,
  TimelineItem,
  TimelineList,
  TimelineTexts,
  TimelineTitle,
  TotalDuePrice,
  TotalDueRow,
  TotalDueTitle,
  UnlockTitle,
} from './groupD.styles';

const TIMELINE_ICONS = {
  lock: LockIcon,
  calendar: CalendarMonthIcon,
  shield: VerifiedUserIcon,
} as const;

const FEATURE_ILLUSTRATIONS = {
  edit: featureEdit,
  convert: featureConvert,
  organize: featureOrganize,
  media: featureMedia,
} as const;

/** Group D — checkout with a small progress bar and trial timeline. */
export const GroupD: FC = () => {
  const trialPrice = formatPlanPrice(CHECKOUT.trialPriceCents);

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <PageTitle>Final step to download your file</PageTitle>
        <CheckoutColumns>
          <LeftColumn>
            <MobilePanel>
              <DownloadPanel
                fileName={CHECKOUT_FILE.compressedFileName}
                progressPercent={CHECKOUT_FILE.progressPercentD}
              />
            </MobilePanel>

            <FileCard data-testid="file-ready-card">
              <FileCardTitleRow>
                <CheckCircleIcon />
                Your file is almost ready!
              </FileCardTitleRow>
              <PdfChip>PDF</PdfChip>
              <PlaceholderPage />
              <FileName>{CHECKOUT_FILE.compressedFileName}</FileName>
              <ProgressRow>
                <ProgressTrack>
                  <ProgressFill style={{ width: `${CHECKOUT_FILE.progressPercentD}%` }} />
                </ProgressTrack>
                <ProgressPercent>{CHECKOUT_FILE.progressPercentD}%</ProgressPercent>
              </ProgressRow>
            </FileCard>

            <TimelineList>
              {TRIAL_TIMELINE.map((item) => {
                const Icon = TIMELINE_ICONS[item.icon];

                return (
                  <TimelineItem key={item.title}>
                    <TimelineIcon>
                      <Icon />
                    </TimelineIcon>
                    <TimelineTexts>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineDescription $bold={item.isBold}>
                        {item.description}
                      </TimelineDescription>
                    </TimelineTexts>
                  </TimelineItem>
                );
              })}
            </TimelineList>

            <DesktopBadges>
              <TrustBadges badges={['encrypted', 'support', 'users']} />
            </DesktopBadges>
          </LeftColumn>

          <RightColumn>
            <TotalDueRow>
              <TotalDueTitle>Total due today:</TotalDueTitle>
              <TotalDuePrice data-testid="total-due-price">{trialPrice}</TotalDuePrice>
            </TotalDueRow>

            <DesktopPayments>
              <PaymentMethods layout="stacked" />
            </DesktopPayments>
            <MobilePayments>
              <PaymentMethodTabs />
            </MobilePayments>

            <DisclaimerBlock>
              <CheckoutDisclaimer variant="full" />
            </DisclaimerBlock>

            <UnlockTitle>Everything unlocks the moment you start</UnlockTitle>
            <FeatureGrid>
              {UNLOCK_FEATURES.map((feature) => (
                <FeatureCard key={feature.title}>
                  <FeatureIllustration
                    src={FEATURE_ILLUSTRATIONS[feature.illustration]}
                    alt=""
                    role="presentation"
                  />
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </RightColumn>
        </CheckoutColumns>
      </Content>
    </>
  );
};
