import type { FC } from 'react';

import { ReactComponent as ApplePayLogo } from '@/shared/ui/assets/payment-methods/apple-pay.svg?react';
import { ReactComponent as GPayLogo } from '@/shared/ui/assets/payment-methods/gpay.svg?react';
import payPalLogo from '@/shared/ui/assets/payment-methods/paypal.svg';
/* White card-brand set for the dark card button — same as the main app. */
import amexWhite from '@/shared/ui/assets/card-brands/american-express.svg';
import maestroWhite from '@/shared/ui/assets/card-brands/maestro.svg';
import mastercardWhite from '@/shared/ui/assets/card-brands/mastercard.svg';
import visaWhite from '@/shared/ui/assets/card-brands/visa.svg';

import {
  BrandLogo,
  CardBrandIcon,
  CardBrandsRow,
  CardButton,
  CardLabel,
  PaymentButton,
  PaymentButtonsContainer,
} from './styles';

export type TPaymentMethodsLayout = 'stacked' | 'grid';

interface IPaymentMethodsProps {
  /** 'stacked' — one button per row (groups A, C, D); 'grid' — 2×2 (group B). */
  layout?: TPaymentMethodsLayout;
}

const CARD_BRANDS = [
  { name: 'Mastercard', logo: mastercardWhite },
  { name: 'Maestro', logo: maestroWhite },
  { name: 'Visa', logo: visaWhite },
  { name: 'American Express', logo: amexWhite },
];

/**
 * Payment method buttons (PayPal / Google Pay / Apple Pay / card).
 * Purely presentational — the production funnel wires these to the
 * payment SDK.
 */
export const PaymentMethods: FC<IPaymentMethodsProps> = ({ layout = 'stacked' }) => {
  return (
    <PaymentButtonsContainer $layout={layout}>
      <PaymentButton type="button" $brand="paypal" data-testid="paypal-button">
        <BrandLogo as="img" src={payPalLogo} alt="PayPal" />
      </PaymentButton>
      <PaymentButton type="button" $brand="gpay" data-testid="gpay-button" aria-label="Google Pay">
        <GPayLogo />
      </PaymentButton>
      <PaymentButton
        type="button"
        $brand="apple-pay"
        data-testid="apple-pay-button"
        aria-label="Apple Pay"
      >
        <ApplePayLogo />
      </PaymentButton>
      <CardButton type="button" data-testid="card-button">
        <CardLabel>Pay with card</CardLabel>
        <CardBrandsRow>
          {CARD_BRANDS.map((brand) => (
            <CardBrandIcon key={brand.name} src={brand.logo} alt={brand.name} />
          ))}
        </CardBrandsRow>
      </CardButton>
    </PaymentButtonsContainer>
  );
};
