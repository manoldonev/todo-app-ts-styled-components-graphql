import styled from 'styled-components/macro';
import { FilterMode, useStore } from '../../../store';

const FilterList = styled.ul`
  flex: 0 0 auto;
  list-style-type: none;
  padding-left: 0;
`;

const FilterItem = styled.li`
  display: inline;
  margin: 0.5rem;
`;

const Button = styled.button.attrs({ type: 'button' })<{ active: boolean }>`
  font-size: 1.8rem;
  text-transform: capitalize;
  background-color: transparent;
  color: inherit;
  padding: 0.3rem 0.7rem;
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 0.3rem;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  ${(props) =>
    props.active &&
    `
    border-color: rgba(175, 47, 47, 0.2);
  `}
`;

const Filter = (): JSX.Element => {
  const mode = useStore.useFilterMode();
  const toggleFilterMode = useStore.useToggleFilterMode();

  return (
    <FilterList>
      {Object.entries(FilterMode).map(([key, value]) => (
        <FilterItem key={key}>
          <Button
            active={value === mode}
            onClick={() => toggleFilterMode(value)}
          >
            {value}
          </Button>
        </FilterItem>
      ))}
    </FilterList>
  );
};

export { Filter };
