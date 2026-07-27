import styled, { css } from 'styled-components';

import type { TPaymentMethodsLayout } from './index';

const buttonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 0 24px;
  border: none;
  border-radius: var(--radius-2);
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const PaymentButtonsContainer = styled.div<{ $layout: TPaymentMethodsLayout }>`
  display: grid;
  grid-template-columns: ${({ $layout }) => ($layout === 'grid' ? '1fr 1fr' : '1fr')};
  gap: 12px;
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentButton = styled.button<{ $brand: 'paypal' | 'gpay' | 'apple-pay' }>`
  ${buttonBase}
  background: ${({ $brand }) => ($brand === 'paypal' ? '#ffc439' : '#000')};
  /* The Apple Pay mark uses currentColor. */
  color: #fff;

  svg,
  img {
    height: 26px;
    width: auto;
  }

  /* Recolor the dark "Pay" lettering of the Google Pay mark for the black button. */
  svg path[fill='#1D1D1D'] {
    fill: #fff;
  }
`;

export const BrandLogo = styled.img`
  height: 26px;
`;

/** Anchor for the card details dropdown that opens under the button. */
export const CardButtonCell = styled.div`
  position: relative;
  min-width: 0;
`;

export const CardButton = styled.button`
  ${buttonBase}
  justify-content: space-between;
  gap: 16px;
  background: #61656c;
  color: var(--color-common-white, #fff);
`;

export const CardLabel = styled.span`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  white-space: nowrap;
`;

export const CardBrandsRow = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardBrandIcon = styled.img`
  height: 22px;
`;
