import styled from 'styled-components';

export const TabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const TabsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Same design-system sizing and corner radius as the payment buttons. */
  height: 52px;
  padding: 0 12px;
  border-radius: var(--radius-2);
  border: 1px solid
    ${({ $active }) =>
      $active ? 'var(--color-primary)' : 'var(--color-outline-border, #cdd5df)'};
  background: ${({ $active }) =>
    $active
      ? 'var(--color-state-primary-hover, rgba(73, 136, 252, 0.08))'
      : 'var(--Background-bg_white, #fff)'};
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  img,
  svg {
    height: 24px;
    width: auto;
    max-width: 100%;
  }
`;

export const CardTabLabel = styled.span`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;
