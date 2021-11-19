import styled from 'styled-components/macro';
import { useQueryClient } from 'react-query';
import type { DataItem } from '../../../context/todo';
import { useUpdateTodoMutation } from '../../../generated';

const ListItem = styled.li<{ done: boolean }>`
  background-color: #fff;
  border: none;
  border-bottom: 0.1rem solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  ${(props) =>
    props.done &&
    `
    text-decoration: line-through;
    color: #aaa;  
    `}
`;

const Wrapper = styled.div`
  margin: 1rem 0;
  min-height: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.4rem;
`;

const TodoItem = ({ data }: { data: DataItem }): JSX.Element => {
  const { id, task, done } = data;
  const queryClient = useQueryClient();
  const { mutate } = useUpdateTodoMutation<Error>({
    onSuccess: async () => queryClient.invalidateQueries('Todos'),
  });

  const handleChange = (): void => {
    mutate({ id, input: { done: !done } });
  };

  return (
    <ListItem done={done}>
      <Wrapper>
        <label htmlFor={id}>
          <Checkbox id={id} checked={done} onChange={handleChange} />
          {task}
        </label>
      </Wrapper>
    </ListItem>
  );
};

export { TodoItem };
