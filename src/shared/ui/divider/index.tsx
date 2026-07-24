import styled from 'styled-components';

/**
 * Rule built on the design system's divider token. @universe-forma/ui-pes
 * exposes only the --color-divider token (no Divider component), so this
 * is the single shared primitive used wherever items need separating —
 * the same approach the main app uses.
 */
export const Divider = styled.div<{
  $orientation?: 'horizontal' | 'vertical';
  /** Length of the rule: height when vertical, width when horizontal. */
  $length?: string;
}>`
  flex-shrink: 0;
  background: var(--color-divider);
  ${({ $orientation = 'horizontal', $length }) =>
    $orientation === 'vertical'
      ? `width: 1px; height: ${$length ?? '16px'}; align-self: center;`
      : `height: 1px; width: ${$length ?? '100%'};`}
`;
