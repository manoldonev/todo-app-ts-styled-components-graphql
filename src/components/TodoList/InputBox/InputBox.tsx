import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components/macro';
import { ActionType, useTodoDispatch } from '../../../context/todo';
import { useCreateTodoMutation } from '../../../generated';

const StyledInput = styled.input.attrs({
  type: 'text',
})`
  display: block;
  width: 100%;
  height: 3.4rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const InputBox = (): JSX.Element => {
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const queryClient = useQueryClient();
  const { mutate } = useCreateTodoMutation<Error>({
    onSuccess: async () => {
      queryClient.invalidateQueries('Todos');
      setValue('');
      dispatch({ type: ActionType.TogglePage, numericPayload: 1 });
    },
  });

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      // TODO: implement user management
      mutate({ input: { task: value.trim(), done: false, user_id: '1' } });
    }
  };

  return (
    <StyledInput
      placeholder="Add New"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
};

export { InputBox, StyledInput };
