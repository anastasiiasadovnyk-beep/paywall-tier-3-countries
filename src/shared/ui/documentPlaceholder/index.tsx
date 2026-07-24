import styled from 'styled-components';

/**
 * Plain A4-proportioned placeholder for the visitor's document (the
 * production funnel renders the real file preview here). The parent
 * container controls the width.
 */
export const DocumentPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1.414;
  background: var(--Background-bg_white, #fff);
  /* Same stroke and corners as the feature cards. */
  border-radius: var(--radius-2);
  border: 1px solid var(--color-divider);
`;
