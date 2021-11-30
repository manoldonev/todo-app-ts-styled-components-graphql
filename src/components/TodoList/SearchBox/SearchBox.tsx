import type { ChangeEvent } from 'react';
import { useStore } from '../../../store';
import { StyledInput } from '../InputBox';

const SearchBox = (): JSX.Element => {
  const query = useStore.useQuery();
  const updateQuery = useStore.useUpdateQuery();
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    updateQuery(value);
  }

  return (
    <StyledInput placeholder="Search" value={query} onChange={handleChange} />
  );
};

export { SearchBox };
