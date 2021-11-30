import styled from 'styled-components/macro';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageButton } from '../../common/ImageButton';
import { InputMode, useStore } from '../../../store';

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
  margin: 0 0.3rem;

  ${(props) => props.active && `opacity: 1;`}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2.7rem;
`;

const Actions = (): JSX.Element => {
  const mode = useStore.useInputMode();
  const toggleInputMode = useStore.useToggleInputMode();

  return (
    <ActionList>
      <ActionItem>
        <ActionButton
          active={mode === InputMode.Add}
          value={InputMode.Add}
          aria-label="Create Mode"
          onClick={() => toggleInputMode(InputMode.Add)}
        >
          <StyledFontAwesomeIcon icon={faPlus} fixedWidth />
        </ActionButton>
      </ActionItem>
      <ActionItem>
        <ActionButton
          active={mode === InputMode.Search}
          value={InputMode.Search}
          aria-label="Search Mode"
          onClick={() => toggleInputMode(InputMode.Search)}
        >
          <StyledFontAwesomeIcon icon={faSearch} fixedWidth />
        </ActionButton>
      </ActionItem>
    </ActionList>
  );
};

export { Actions };
