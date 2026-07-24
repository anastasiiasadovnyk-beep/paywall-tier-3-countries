import type { FC } from 'react';

import { LockIcon } from '@/shared/ui/icons';

import { NoteContainer } from './styles';

/** Reassurance line with a lock icon under the payment section. */
export const SecuredPaymentNote: FC = () => {
  return (
    <NoteContainer>
      <LockIcon />
      Your payment is secured and the information is encrypted.
    </NoteContainer>
  );
};
