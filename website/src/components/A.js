import styled from 'styled-components';

const A = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: inherit;
  font-weight: 700;
  display: inline;
  transition: opacity 0.3s;
  :hover {
    opacity: ${0.8};
    :active {
      opacity: ${0.6};
    }
  }
`;

export default A;
