import styled from 'styled-components/macro';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MouseEvent } from 'react';
import { ImageButton } from '../../common/ImageButton';
import {
  ActionType,
  InputMode,
  useTodoDispatch,
  useTodoState,
} from '../../../context/todo';

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

const ActionButton = styled(ImageButton)<{ active: boolean }>`
  margin: 0 0.8rem 0 0;

  ${(props) => props.active && `opacity: 1;`}
`;

const Actions = (): JSX.Element => {
  const { inputMode: mode } = useTodoState();
  const dispatch = useTodoDispatch();

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    dispatch({
      type: ActionType.ToggleMode,
      numericPayload: parseInt(e.currentTarget.value, 10),
    });
  };

  return (
    <ActionList>
      <ActionItem>
        <ActionButton
          active={mode === InputMode.Add}
          value={InputMode.Add}
          aria-label="Create Mode"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </ActionButton>
      </ActionItem>
      <ActionItem>
        <ActionButton
          active={mode === InputMode.Search}
          value={InputMode.Search}
          aria-label="Search Mode"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSearch} fixedWidth />
        </ActionButton>
      </ActionItem>
    </ActionList>
  );
};

export { Actions };
