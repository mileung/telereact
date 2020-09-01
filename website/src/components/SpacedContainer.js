import styled from 'styled-components';

const SpacedContainer = styled.div.attrs(({ row }) => ({
  className: row ? 'row wrap aic' : '',
}))`
  > *:not(:first-child) {
    ${({ row }) => (row ? `margin-left: 0.75rem` : `margin-top: 0.5rem`)};
  }
`;

export default SpacedContainer;
