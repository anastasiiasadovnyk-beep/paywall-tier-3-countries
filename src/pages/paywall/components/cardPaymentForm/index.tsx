import { type ChangeEvent, forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Input } from '@universe-forma/ui-pes';

import { InfoIcon } from '@/shared/ui/icons';

import { ContinueButton } from '../continueButton';
import { FieldsRow, FormRoot } from './styles';

interface ICardPaymentFormProps {
  /** Called when the user clicks outside the form and its button. */
  onClickOutside?: () => void;
}

/**
 * Card details form that unfolds from the "Pay with card" button —
 * the button itself acts as the form's title. On two-column layouts
 * the form floats like a dropdown: below the button when the page has
 * enough content to cover it, above otherwise (so it never adds empty
 * space at the bottom of the page). On single-column layouts it
 * expands in place. Purely presentational — the production funnel
 * wires the fields and the pay button to the payment SDK.
 */
export const CardPaymentForm = forwardRef<HTMLDivElement, ICardPaymentFormProps>((props, forwardedRef) => {
  const { onClickOutside } = props;
  const [fields, setFields] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardholderName: '',
  });
  const [placement, setPlacement] = useState<'above' | 'below' | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const setRefs = (node: HTMLDivElement | null) => {
    innerRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  // First paint renders the form hidden (above the button, so it can't
  // stretch the page) to measure it, then picks the side: below only
  // if the content under the button is tall enough to cover the form.
  useLayoutEffect(() => {
    const form = innerRef.current;
    if (!form || getComputedStyle(form).position !== 'absolute') {
      setPlacement('below');
      return;
    }

    const cell = form.offsetParent;
    if (!cell) {
      setPlacement('below');
      return;
    }
    const cellBottom = cell.getBoundingClientRect().bottom + window.scrollY;
    const spaceBelow = document.documentElement.scrollHeight - cellBottom - 8;
    setPlacement(spaceBelow >= form.offsetHeight ? 'below' : 'above');
  }, []);

  // Close on any press outside the form and its anchor button (the
  // button keeps its own toggle behaviour).
  useEffect(() => {
    if (!onClickOutside) return undefined;

    const handlePointerDown = (event: PointerEvent) => {
      const anchorCell = innerRef.current?.parentElement;
      if (anchorCell && event.target instanceof Node && !anchorCell.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [onClickOutside]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormRoot ref={setRefs} $placement={placement} data-testid="card-payment-form">
      <Input
        size="lg"
        bg="default"
        label="Card Number"
        placeholder="XXXX XXXX XXXX XXXX"
        name="cardNumber"
        value={fields.cardNumber}
        onChange={handleChange}
        autoComplete="cc-number"
        inputMode="numeric"
      />

      <FieldsRow>
        <Input
          size="lg"
          bg="default"
          label="Expiry Date"
          placeholder="MM/YYYY"
          name="cardExpiry"
          value={fields.cardExpiry}
          onChange={handleChange}
          autoComplete="cc-exp"
          inputMode="numeric"
        />
        <Input
          size="lg"
          bg="default"
          label="CVV/CVC"
          placeholder="CVV"
          name="cardCvv"
          value={fields.cardCvv}
          onChange={handleChange}
          autoComplete="cc-csc"
          inputMode="numeric"
          rightIcon={<InfoIcon />}
        />
      </FieldsRow>

      <Input
        size="lg"
        bg="default"
        label="Cardholder name"
        placeholder="Full name as on card"
        name="cardholderName"
        value={fields.cardholderName}
        onChange={handleChange}
        autoComplete="cc-name"
      />

      <ContinueButton>Pay &amp; download my file</ContinueButton>
    </FormRoot>
  );
});

CardPaymentForm.displayName = 'CardPaymentForm';
