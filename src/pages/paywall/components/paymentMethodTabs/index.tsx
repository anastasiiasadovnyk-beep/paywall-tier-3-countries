import { type FC, useState } from 'react';

import { ReactComponent as GPayLogo } from '@/shared/ui/assets/payment-methods/gpay.svg?react';
import payPalLogo from '@/shared/ui/assets/payment-methods/paypal.svg';

import { CARD_BRANDS } from '../paymentMethods';
import {
  BrandLogo,
  CardBrandIcon,
  CardBrandsRow,
  CardButton,
  CardLabel,
  PaymentButton,
} from '../paymentMethods/styles';
import { CardTabLabel, Tab, TabsRoot, TabsRow } from './styles';

type TTabMethod = 'paypal' | 'gpay' | 'card';

/**
 * Compact payment selector for small screens (group D): the visitor
 * picks a method in a three-tab row and the matching pay button
 * renders below — the reference mobile checkout pattern. Purely
 * presentational, like PaymentMethods.
 */
export const PaymentMethodTabs: FC = () => {
  const [method, setMethod] = useState<TTabMethod>('paypal');

  return (
    <TabsRoot>
      <TabsRow>
        <Tab
          type="button"
          $active={method === 'paypal'}
          aria-pressed={method === 'paypal'}
          data-testid="payment-tab-paypal"
          onClick={() => setMethod('paypal')}
        >
          <img src={payPalLogo} alt="PayPal" />
        </Tab>
        <Tab
          type="button"
          $active={method === 'gpay'}
          aria-pressed={method === 'gpay'}
          aria-label="Google Pay"
          data-testid="payment-tab-gpay"
          onClick={() => setMethod('gpay')}
        >
          <GPayLogo />
        </Tab>
        <Tab
          type="button"
          $active={method === 'card'}
          aria-pressed={method === 'card'}
          data-testid="payment-tab-card"
          onClick={() => setMethod('card')}
        >
          <CardTabLabel>Card</CardTabLabel>
        </Tab>
      </TabsRow>

      {method === 'paypal' && (
        <PaymentButton type="button" $brand="paypal" data-testid="mobile-paypal-button">
          <BrandLogo src={payPalLogo} alt="PayPal" />
        </PaymentButton>
      )}
      {method === 'gpay' && (
        <PaymentButton
          type="button"
          $brand="gpay"
          aria-label="Google Pay"
          data-testid="mobile-gpay-button"
        >
          <GPayLogo />
        </PaymentButton>
      )}
      {method === 'card' && (
        <CardButton type="button" data-testid="mobile-card-button">
          <CardLabel>Pay with card</CardLabel>
          <CardBrandsRow>
            {CARD_BRANDS.map((brand) => (
              <CardBrandIcon key={brand.name} src={brand.logo} alt={brand.name} />
            ))}
          </CardBrandsRow>
        </CardButton>
      )}
    </TabsRoot>
  );
};
