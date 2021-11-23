import styled from 'styled-components/macro';

const ImageButton = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: 0;
  font-size: calc(max(2rem, 20px));
  transition: 0.3s all;
  opacity: 0.4;

  &:enabled {
    cursor: pointer;
  }

  &:hover:enabled {
    opacity: 1;
  }
`;

export { ImageButton };
