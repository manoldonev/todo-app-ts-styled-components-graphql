import styled from 'styled-components/macro';
import { useQueryClient } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import type { DataItem } from '../../../context/todo';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../generated';
import { ImageButton } from '../../common/ImageButton';

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
  display: flex;
  margin: 1rem 0;
  min-height: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.4rem;
`;

const TodoItem = ({ data }: { data: DataItem }): JSX.Element => {
  const { id, task, done } = data;
  const queryClient = useQueryClient();
  const { mutate: updateTodo } = useUpdateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries('Todos'),
  });

  const { mutate: deleteTodo } = useDeleteTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries('Todos'),
  });

  const handleChange = (): void => {
    updateTodo({ id, input: { done: !done } });
  };

  const handleClick = (): void => {
    deleteTodo({ id });
  };

  return (
    <ListItem done={done}>
      <Wrapper>
        <label style={{ marginRight: 'auto' }} htmlFor={id}>
          <Checkbox id={id} checked={done} onChange={handleChange} />
          {task}
        </label>
        <ImageButton onClick={handleClick} aria-label="Delete Item">
          <FontAwesomeIcon icon={faTrashAlt} />
        </ImageButton>
      </Wrapper>
    </ListItem>
  );
};

export { TodoItem };
