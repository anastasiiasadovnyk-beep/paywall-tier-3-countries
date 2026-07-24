import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 32px 112px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 120px;

  @media (max-width: 1024px) {
    padding: 32px 40px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const HeaderSteps = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderStep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderStepNumber = styled.div<{ $status?: string }>`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 4px 10px 4px 11px;
  justify-content: center;
  align-items: center;
  color: ${({ $status }) => ($status === 'active' ? '#fff' : '#b4b4b4')};
  border-radius: var(--radius-1);
  border: ${({ $status }) =>
    $status === 'active' ? '1px solid var(--color-primary)' : '1px solid var(--color-divider)'};
  background: ${({ $status }) => {
    if ($status === 'active') return 'var(--color-primary)';
    if ($status === 'completed') return 'var(--color-divider)';

    return '#fff';
  }};
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ $status }) => ($status === 'active' ? '700' : '500')};
  line-height: 24px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    fill: #393939;
  }
`;

export const HeaderStepTitle = styled.div<{ $status?: string }>`
  color: ${({ $status }) => {
    if (['active', 'completed'].includes($status as string)) return '#393939';

    return '#b4b4b4';
  }};
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ $status }) => ($status === 'active' ? '700' : '500')};
  line-height: 24px;
`;

export const HeaderStepDivider = styled.div<{ $status?: string }>`
  width: 32px;
  margin: 0 4px;
  height: 1px;
  border-radius: var(--radius-1);
  background: ${({ $status }) =>
    $status === 'completed' ? '#393939' : 'var(--color-divider)'};
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const MobileHeader = styled.section`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
  }
`;

export const MobileLogo = styled.img`
  height: 32px;
`;
