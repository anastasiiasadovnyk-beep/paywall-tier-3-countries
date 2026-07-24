import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  DEFAULT_PAYWALL_GROUP,
  type EPaywallGroup,
  isPaywallGroup,
  PAYWALL_GROUP_STORAGE_KEY,
} from './paywallGroup';

/**
 * Resolves the paywall experiment group for the current visitor:
 * 1. `?group=a|c|d` in the URL always wins (and becomes sticky),
 * 2. otherwise the group persisted in localStorage,
 * 3. otherwise the control group A.
 *
 * In production the group would come from the experimentation platform
 * (GrowthBook in PDFLeader); the URL override keeps every variant
 * deep-linkable for design review.
 */
export const usePaywallGroup = (): EPaywallGroup => {
  const [searchParams] = useSearchParams();
  const override = searchParams.get('group')?.toLowerCase();

  const group = useMemo<EPaywallGroup>(() => {
    if (isPaywallGroup(override)) return override;

    const stored = localStorage.getItem(PAYWALL_GROUP_STORAGE_KEY);
    if (isPaywallGroup(stored)) return stored;

    return DEFAULT_PAYWALL_GROUP;
  }, [override]);

  useEffect(() => {
    localStorage.setItem(PAYWALL_GROUP_STORAGE_KEY, group);
  }, [group]);

  return group;
};
