import type { FC } from 'react';

import { CHECKOUT_FILE } from '@/shared/constants/checkout';
import { Divider } from '@/shared/ui/divider';
import { DocumentPlaceholder } from '@/shared/ui/documentPlaceholder';

import { TrustpilotRating } from '../trustpilotRating';
import {
  FileDetails,
  FileMeta,
  FileNameRow,
  FileNameText,
  FileRow,
  FileThumbnail,
  Panel,
  PdfChip,
  ProgressBarRow,
  ProgressFill,
  ProgressPercent,
  ProgressTrack,
  TrustItem,
  TrustRow,
} from './styles';

interface IDownloadPanelProps {
  /** File name shown next to the PDF chip (middle-truncated by CSS). */
  fileName: string;
  /** Download progress, 0–100. */
  progressPercent: number;
}

/**
 * White download-progress panel: file facts, a green progress bar and
 * the Trustpilot trust row. Used by group C at every viewport and by
 * group D as the compact mobile replacement for its big file card.
 */
export const DownloadPanel: FC<IDownloadPanelProps> = ({ fileName, progressPercent }) => {
  return (
    <Panel data-testid="download-panel">
      <FileRow>
        <FileThumbnail>
          <DocumentPlaceholder />
        </FileThumbnail>
        <FileDetails>
          <FileNameRow>
            <PdfChip>PDF</PdfChip>
            <FileNameText>{fileName}</FileNameText>
          </FileNameRow>
          <FileMeta>
            <span>{CHECKOUT_FILE.sizeLabel}</span>
            <Divider $orientation="vertical" $length="12px" />
            <span>Converted &amp; ready</span>
          </FileMeta>
        </FileDetails>
      </FileRow>
      <ProgressBarRow>
        <ProgressTrack>
          <ProgressFill style={{ width: `${progressPercent}%` }} />
        </ProgressTrack>
        <ProgressPercent>{progressPercent}%</ProgressPercent>
      </ProgressBarRow>
      <TrustRow>
        <TrustpilotRating score={4.8} />
        <Divider $orientation="vertical" $length="18px" />
        <TrustItem>10+ million users</TrustItem>
        <Divider $orientation="vertical" $length="18px" />
        <TrustItem>Cancel anytime</TrustItem>
      </TrustRow>
    </Panel>
  );
};
