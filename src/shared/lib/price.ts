import { formatPrice } from '@universe-forma/ui-pes';

/** All mock plans are priced in USD. */
export const PLAN_CURRENCY = 'USD';

/** Formats a price given in cents, e.g. 195 -> "$1.95". */
export const formatPlanPrice = (amountInCents: number): string =>
  formatPrice(amountInCents, PLAN_CURRENCY);
