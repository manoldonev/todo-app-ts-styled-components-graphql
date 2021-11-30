import type { ChangeEvent } from 'react';
import type { TodoState } from '../../../store';
import { useStore } from '../../../store';
import { StyledInput } from '../InputBox';

const selector = (state: TodoState): string => state.query;
const updateSelector = (state: TodoState): ((query: string) => void) =>
  state.updateQuery;

const SearchBox = (): JSX.Element => {
  const query = useStore(selector);
  const updateQuery = useStore(updateSelector);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    updateQuery(value);
  }

  return (
    <StyledInput placeholder="Search" value={query} onChange={handleChange} />
  );
};

export { SearchBox };
