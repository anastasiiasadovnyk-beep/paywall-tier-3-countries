/**
 * Mock data for the checkout paywall design. In production these values
 * come from the payments backend and the uploaded document — the values
 * here mirror the reference mockups.
 *
 * All prices are in USD cents (the design system's formatPrice treats
 * amounts as cents by default, same as the payments API).
 */

export const CHECKOUT = {
  /** Price charged today for the 7-day trial. */
  trialPriceCents: 95,
  /** Price charged every 4 weeks after the trial. */
  recurringPriceCents: 4495,
  supportEmail: 'support@pdfleader.com',
  supportPhone: '+1 (844) 548-9416',
} as const;

/** Uploaded-file facts shown on the checkout screens. */
export const CHECKOUT_FILE = {
  /** Long name demonstrating middle truncation (groups A and C). */
  longFileName: 'Verylongfilenameveryvery....pdf',
  /** File name used on the group D screen. */
  compressedFileName: 'File_name_compressed.pdf',
  sizeLabel: '2.4 MB',
  progressPercentC: 95,
  progressPercentD: 89,
} as const;

/** Group A — "Your 7-day trial includes:" checklist. */
export const TRIAL_INCLUDES: { text: string; isBold?: boolean }[] = [
  { text: 'Unlimited downloads: up to 200 files/day in any format' },
  { text: 'Convert between 50+ formats including Word, Excel, and JPG' },
  { text: 'Share secure access to your account with up to 5 people' },
  { text: 'Create electronic signatures and sign your files online' },
  { text: 'After the 7-day trial, your plan renews at $44.95/4-weeks', isBold: true },
];

/** Group D — trial timeline under the file preview. */
export const TRIAL_TIMELINE: { icon: 'lock' | 'calendar' | 'shield'; title: string; description: string; isBold?: boolean }[] = [
  {
    icon: 'lock',
    title: 'Your 7-day trial begins',
    description: 'Start enjoying everything PDFLeader has to offer you and your team.',
  },
  {
    icon: 'calendar',
    title: '29 July 2026',
    description: 'After 7 days trial, your plan renews at $44.95 automatically every 4 weeks',
    isBold: true,
  },
  {
    icon: 'shield',
    title: 'Cancel anytime',
    description: 'Cancel whenever you want in your profile settings or through our support.',
  },
];

/** Group D — "Everything unlocks the moment you start" feature cards. */
export const UNLOCK_FEATURES: { illustration: 'edit' | 'convert' | 'organize' | 'media'; title: string; description: string }[] = [
  { illustration: 'edit', title: 'Edit', description: 'All editing & annotation tools' },
  { illustration: 'convert', title: 'Convert', description: 'Convert to/from any format' },
  { illustration: 'organize', title: 'Organize', description: 'Merge, split & compress' },
  { illustration: 'media', title: 'Media', description: 'Video, audio & image tools' },
];
