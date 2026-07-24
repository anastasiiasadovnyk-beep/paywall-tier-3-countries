import type { FC } from 'react';

import { EventAvailableIcon, HeadsetMicIcon, LockIcon, VerifiedIcon } from '@/shared/ui/icons';

import { Badge, BadgesRow } from './styles';

export type TTrustBadge = 'cancel-anytime' | 'support' | 'users' | 'encrypted';

const BADGE_CONTENT: Record<TTrustBadge, { icon: FC<{ className?: string }>; label: string }> = {
  'cancel-anytime': { icon: EventAvailableIcon, label: 'Cancel anytime' },
  support: { icon: HeadsetMicIcon, label: '24/7 customer support' },
  users: { icon: VerifiedIcon, label: '10+ million users' },
  encrypted: { icon: LockIcon, label: 'Encrypted connection' },
};

interface ITrustBadgesProps {
  badges: TTrustBadge[];
}

/** Green outlined reassurance pills under the payment form. */
export const TrustBadges: FC<ITrustBadgesProps> = ({ badges }) => {
  return (
    <BadgesRow>
      {badges.map((badge) => {
        const { icon: Icon, label } = BADGE_CONTENT[badge];

        return (
          <Badge key={badge}>
            <Icon />
            {label}
          </Badge>
        );
      })}
    </BadgesRow>
  );
};
