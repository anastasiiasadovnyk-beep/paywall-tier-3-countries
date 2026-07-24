import styled from 'styled-components';

export const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: var(--color-primary);
  }
`;
