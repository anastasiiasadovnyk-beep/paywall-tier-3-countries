import type { FC } from 'react';

import trustpilotLogo from '@/shared/ui/assets/trustpilot-logo.svg';

import { ExcellentText, RatingContainer, ScoreText, TrustpilotLogo } from './styles';

interface ITrustpilotRatingProps {
  score?: number;
}

/**
 * Trustpilot rating in the official micro-widget layout: the rating
 * word, the score out of 5, and the official Trustpilot logo.
 * Typography is the PDFLeader brand font per design guidelines.
 */
export const TrustpilotRating: FC<ITrustpilotRatingProps> = ({ score = 4.8 }) => {
  return (
    <RatingContainer aria-label={`Rated Excellent, ${score} out of 5 on Trustpilot`}>
      <ExcellentText>Excellent</ExcellentText>
      <ScoreText>
        <b>{score}</b> out of 5
      </ScoreText>
      <TrustpilotLogo src={trustpilotLogo} alt="Trustpilot" />
    </RatingContainer>
  );
};
