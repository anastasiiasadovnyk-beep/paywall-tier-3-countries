import type { FC } from 'react';

import { ArrowForwardIcon } from '@/shared/ui/icons';

import { StyledContinueButton } from './styles';

interface IContinueButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: string;
}

/** Primary funnel CTA under the plan cards. */
export const ContinueButton: FC<IContinueButtonProps> = ({
  disabled = false,
  onClick,
  children = 'Continue',
}) => {
  return (
    <StyledContinueButton
      variant="filled"
      color="primary"
      size="lg"
      disabled={disabled}
      data-testid="choose-plan-continue-button"
      onClick={onClick}
      rightIcon={<ArrowForwardIcon />}
    >
      {children}
    </StyledContinueButton>
  );
};
