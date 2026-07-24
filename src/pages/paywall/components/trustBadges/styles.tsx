import styled from 'styled-components';

export const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 10px;
  border-radius: var(--radius-1);
  border: 1px solid var(--color-success-main, #0e9948);
  color: var(--color-success-main, #0e9948);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    flex-shrink: 0;
  }
`;
