/**
 * A/C/D paywall experiment groups.
 *
 * A — Default (control group)
 * C — Big progress bar above the plans
 * D — Small progress bar above the plans
 */
export enum EPaywallGroup {
  A = 'a',
  C = 'c',
  D = 'd',
}

export const PAYWALL_GROUPS: EPaywallGroup[] = Object.values(EPaywallGroup);

export const DEFAULT_PAYWALL_GROUP = EPaywallGroup.A;

/** localStorage key that keeps the assigned group sticky between visits. */
export const PAYWALL_GROUP_STORAGE_KEY = 'paywall-ab-group';

export const isPaywallGroup = (value: unknown): value is EPaywallGroup =>
  typeof value === 'string' && PAYWALL_GROUPS.includes(value as EPaywallGroup);
