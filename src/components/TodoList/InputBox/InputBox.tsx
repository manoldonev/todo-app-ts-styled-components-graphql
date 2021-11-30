import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components/macro';
import { useCreateTodoMutation } from '../../../generated';
import { useStore } from '../../../store';

const StyledInput = styled.input.attrs({
  type: 'text',
})`
  display: block;
  width: 100%;
  height: 4rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const InputBox = (): JSX.Element => {
  const togglePage = useStore.useTogglePage();
  const [value, setValue] = useState('');
  const queryClient = useQueryClient();
  const { mutate } = useCreateTodoMutation<Error>({
    onSuccess: async () => {
      queryClient.invalidateQueries('Todos');
      setValue('');
      togglePage(1);
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
