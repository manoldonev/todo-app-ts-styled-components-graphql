import styled from 'styled-components/macro';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionList = styled.ul`
  flex: 0 0 auto;
  list-style-type: none;
  border-right: 0.1rem solid #ccc;
  margin-right: 1.8rem;
  padding: 0;
`;

const ActionItem = styled.li`
  display: inline;
`;

const Button = styled.button.attrs({ type: 'button' })<{ active?: boolean }>`
  background-color: transparent;
  border: 0;
  margin: 0 0.8rem 0 0;
  font-size: calc(max(2rem, 20px));
  cursor: pointer;
  transition: 0.3s all;
  opacity: 0.4;
  ${(props) => props.active != null && props.active && `opacity: 1;`}

  &:hover {
    opacity: 1;
  }
`;

const Actions = (): JSX.Element => {
  return (
    <ActionList>
      <ActionItem>
        <Button>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </Button>
      </ActionItem>
      <ActionItem>
        <Button>
          <FontAwesomeIcon icon={faSearch} fixedWidth />
        </Button>
      </ActionItem>
    </ActionList>
  );
};

export { Actions };
