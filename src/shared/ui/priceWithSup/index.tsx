import type { FC } from 'react';

interface IPriceWithSupProps {
  /** Already formatted price string, e.g. "$1.95". */
  price: string;
  supClassName?: string;
}

const PRICE_COMPONENTS_REGEX = /^([^0-9]+)?\s*(\d+)(?:\.(\d+))?$/;

/**
 * Renders a price with the decimal part as superscript — the price
 * treatment used across PDFLeader plan cards.
 */
export const PriceWithSup: FC<IPriceWithSupProps> = ({ price, supClassName }) => {
  const match = price.match(PRICE_COMPONENTS_REGEX);

  if (!match) return <>{price}</>;

  const [, currency = '', integerPart, fractionPart] = match;

  return (
    <span data-price-amount="true">
      {currency}
      {integerPart}
      {fractionPart && (
        <>
          .<sup className={supClassName}>{fractionPart}</sup>
        </>
      )}
    </span>
  );
};
