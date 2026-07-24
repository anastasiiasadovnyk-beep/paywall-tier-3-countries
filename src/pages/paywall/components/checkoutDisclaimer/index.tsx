import type { FC } from 'react';

import { CHECKOUT } from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { PAGE_LINKS } from '@/shared/constants/pageLinks';

import { DisclaimerRoot } from './styles';

interface ICheckoutDisclaimerProps {
  /** 'full' — group A/C paragraph; 'short' — condensed group B paragraph. */
  variant?: 'full' | 'short';
  align?: 'left' | 'center';
}

/**
 * Legal descriptor under the payment buttons. Copy mirrors the checkout
 * mockups; prices and contacts come from the shared checkout constants.
 */
export const CheckoutDisclaimer: FC<ICheckoutDisclaimerProps> = ({
  variant = 'full',
  align = 'left',
}) => {
  const recurringPrice = formatPlanPrice(CHECKOUT.recurringPriceCents);

  const subscriptionPolicyLink = (
    <a data-testid="subscription-policy-link" href={PAGE_LINKS.SUBSCRIPTION_TERMS}>
      Subscription Policy
    </a>
  );
  const refundPolicyLink = (
    <a data-testid="refund-policy-link" href={PAGE_LINKS.REFUND_POLICY}>
      Refund Policy
    </a>
  );

  if (variant === 'short') {
    return (
      <DisclaimerRoot $align={align} data-testid="checkout-disclaimer">
        By continuing you agree that after the end of the 7-day trial you will be automatically
        charged {recurringPrice} every 4-weeks unless you cancel before your trial ends. Cancel
        through your account, {CHECKOUT.supportEmail}, or {CHECKOUT.supportPhone}.{' '}
        {subscriptionPolicyLink} and {refundPolicyLink}.
      </DisclaimerRoot>
    );
  }

  return (
    <DisclaimerRoot $align={align} data-testid="checkout-disclaimer">
      By continuing you agree that after the end of 7-day trial you will be automatically charged{' '}
      <a data-testid="recurring-price-link" href={PAGE_LINKS.SUBSCRIPTION_TERMS}>
        {recurringPrice} every 4-weeks
      </a>{' '}
      unless you cancel before your trial ends. You can cancel auto-renewing charges through your
      online account, by emailing{' '}
      <a data-testid="support-email-link" href={`mailto:${CHECKOUT.supportEmail}`}>
        {CHECKOUT.supportEmail}
      </a>
      , or calling{' '}
      <a data-testid="support-phone-link" href={`tel:${CHECKOUT.supportPhone.replace(/[^+\d]/g, '')}`}>
        {CHECKOUT.supportPhone}
      </a>{' '}
      before your next monthly renewal date. Prices may change. See our {subscriptionPolicyLink}{' '}
      and {refundPolicyLink} for full details.
    </DisclaimerRoot>
  );
};
