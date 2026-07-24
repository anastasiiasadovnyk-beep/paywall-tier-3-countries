import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-divider);
  background: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12);
`;

export const SwitcherLabel = styled.span`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  margin-right: 4px;
`;

export const SwitcherPill = styled.span<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-8);
  color: ${({ $active }) => ($active ? '#fff' : '#393939')};
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'transparent')};
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ $active }) => ($active ? '#fff' : 'var(--color-primary)')};
    opacity: 1;
  }
`;
