import type { FC } from 'react';

import { CheckIcon } from '@/shared/ui/icons';

import {
  HeaderStep,
  HeaderStepDivider,
  HeaderStepNumber,
  HeaderSteps,
  HeaderStepTitle,
} from './styles';

/** Checkout flow: the paywall sits on the payment step. */
const FLOW_STEPS = ['Add payment details', 'Download'];

type TStepStatus = 'active' | 'completed' | 'inactive';

const getStepStatus = (activeStep: number, index: number): TStepStatus => {
  if (activeStep === index) return 'active';
  if (activeStep > index) return 'completed';

  return 'inactive';
};

interface IFlowStepsProps {
  /** Index of the current step (0 = Add payment details). */
  activeStep?: number;
}

/**
 * Numbered checkout steps — the progress indicator shown on the right
 * side of every paywall header.
 */
export const FlowSteps: FC<IFlowStepsProps> = ({ activeStep = 0 }) => {
  return (
    <HeaderSteps>
      {FLOW_STEPS.map((title, index) => {
        const status = getStepStatus(activeStep, index);

        return (
          <HeaderStep key={title}>
            <HeaderStepNumber $status={status}>
              {status === 'completed' ? <CheckIcon /> : index + 1}
            </HeaderStepNumber>
            <HeaderStepTitle $status={status}>{title}</HeaderStepTitle>
            {index < FLOW_STEPS.length - 1 && <HeaderStepDivider $status={status} />}
          </HeaderStep>
        );
      })}
    </HeaderSteps>
  );
};
