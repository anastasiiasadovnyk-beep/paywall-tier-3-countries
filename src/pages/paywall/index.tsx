import type { FC } from 'react';

import { EPaywallGroup, usePaywallGroup } from '@/shared/abTest';
import { FooterSection } from '@/widgets/footerSection';

import { GroupSwitcher } from './components/groupSwitcher';
import { GroupA } from './groups/GroupA';
import { GroupC } from './groups/GroupC';
import { GroupD } from './groups/GroupD';
import { PageContainer } from './styles';

const GROUP_COMPONENTS: Record<EPaywallGroup, FC> = {
  [EPaywallGroup.A]: GroupA,
  [EPaywallGroup.C]: GroupC,
  [EPaywallGroup.D]: GroupD,
};

/**
 * Checkout paywall screen. The rendered layout depends on the visitor's
 * A/C/D experiment group — see src/shared/abTest. Each group renders
 * its own header variant, so only the footer is shared here.
 */
const PaywallPage: FC = () => {
  const group = usePaywallGroup();
  const GroupScreen = GROUP_COMPONENTS[group];

  return (
    <PageContainer>
      <GroupScreen />
      <FooterSection />
      {import.meta.env.DEV && <GroupSwitcher activeGroup={group} />}
    </PageContainer>
  );
};

export default PaywallPage;
