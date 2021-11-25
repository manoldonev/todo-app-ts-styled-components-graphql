import styled from 'styled-components/macro';
import { useQueryClient } from 'react-query';
import type { DataItem } from '../../../context/todo';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../generated';
import { SwipeToDelete } from './SwipeToDelete';

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
  flex: 1 0 auto;
  margin: 0 1.5rem;
  height: 2rem;
  width: 2rem;
`;

const Label = styled.label`
  margin-right: auto;
  display: flex;
  align-items: center;
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

  const handleTap = (): void => {
    updateTodo({ id, input: { done: !done } });
  };

  const handleSwipe = (): void => {
    deleteTodo({ id });
  };

  return (
    <ListItem done={done}>
      <SwipeToDelete onSwiped={handleSwipe} onTap={handleTap}>
        <Wrapper>
          <Label htmlFor={id}>
            <Checkbox id={id} checked={done} />
            {task}
          </Label>
          {/* <ImageButton onClick={handleClick} aria-label="Delete Item">
            <FontAwesomeIcon icon={faTrashAlt} />
          </ImageButton> */}
        </Wrapper>
      </SwipeToDelete>
    </ListItem>
  );
};

export { TodoItem };
