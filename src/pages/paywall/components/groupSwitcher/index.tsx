import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { EPaywallGroup, PAYWALL_GROUPS } from '@/shared/abTest';

import { SwitcherContainer, SwitcherLabel, SwitcherPill } from './styles';

interface IGroupSwitcherProps {
  activeGroup: EPaywallGroup;
}

/**
 * Dev-only helper for design review: quick links between the test
 * groups. Rendered exclusively in the dev server (see pages/paywall).
 */
export const GroupSwitcher: FC<IGroupSwitcherProps> = ({ activeGroup }) => {
  return (
    <SwitcherContainer>
      <SwitcherLabel>Group</SwitcherLabel>
      {PAYWALL_GROUPS.map((group) => (
        <SwitcherPill
          key={group}
          as={Link}
          to={{ search: `?group=${group}` }}
          $active={group === activeGroup}
        >
          {group.toUpperCase()}
        </SwitcherPill>
      ))}
    </SwitcherContainer>
  );
};
