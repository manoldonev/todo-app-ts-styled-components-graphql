import type { ChangeEvent } from 'react';
import {
  ActionType,
  useTodoDispatch,
  useTodoState,
} from '../../../context/todo';
import { StyledInput } from '../InputBox';

const SearchBox = (): JSX.Element => {
  const { query } = useTodoState();
  const dispatch = useTodoDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    dispatch({ type: ActionType.SearchItem, stringPayload: value });
  }

  return (
    <StyledInput placeholder="Search" value={query} onChange={handleChange} />
  );
};

export { SearchBox };
