type DesignSystemVersion = 'old' | 'new';

/**
 * The design tokens in `src/app/styles/vars.css` are scoped by the `data-ds`
 * attribute on <html> (the same mechanism PDFLeader uses). Without it the
 * switchable tokens (--color-primary, radii, typography) do not resolve.
 * PDFLeader currently ships the 'old' token set, so the paywall uses it too.
 */
export const initDesignSystem = (version: DesignSystemVersion = 'old'): void => {
  document.documentElement.dataset.ds = version;
};
