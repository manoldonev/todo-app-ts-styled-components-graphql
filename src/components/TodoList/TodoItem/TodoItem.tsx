import styled from 'styled-components/macro';
import { useQueryClient } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@react-hook/media-query';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../generated';
import { SwipeToDelete } from './SwipeToDelete';
import { ImageButton } from '../../common/ImageButton';

const ListItem = styled.li<{ done: boolean }>`
  position: relative;
  display: flex;
  background-color: #fff;
  border: none;
  border-bottom: 0.1rem solid #ddd;
  min-height: 5rem;

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
  flex: 1 1 100%;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  flex: 0 0 auto;
  margin: 0 1.5rem;
  height: 2rem;
  width: 2rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  padding: 0.8rem 0;
`;

const DeleteButton = styled(ImageButton)`
  padding: 0 1.5rem;
`;

const TodoItem = ({
  data,
}: {
  data: {
    id: string;
    task: string;
    done: boolean;
  };
}): JSX.Element => {
  const { id, task, done } = data;
  const queryClient = useQueryClient();
  const { mutate: updateTodo } = useUpdateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries('Todos'),
  });

  const { mutate: deleteTodo } = useDeleteTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries('Todos'),
  });

  const isTouchEnabled = useMediaQuery('(pointer: coarse)');

  const toggleItem = (): void => {
    updateTodo({ id, input: { done: !done } });
  };

  const deleteItem = (): void => {
    deleteTodo({ id });
  };

  const content = (
    <Wrapper>
      <Label htmlFor={id}>
        <Checkbox id={id} checked={done} onChange={toggleItem} />
        {task}
      </Label>
    </Wrapper>
  );

  if (!isTouchEnabled) {
    return (
      <ListItem done={done}>
        {content}
        <DeleteButton onClick={deleteItem} aria-label="Delete Item">
          <FontAwesomeIcon icon={faTrashAlt} />
        </DeleteButton>
      </ListItem>
    );
  }

  return (
    <ListItem done={done}>
      <SwipeToDelete onSwiped={deleteItem} onTap={toggleItem}>
        {content}
      </SwipeToDelete>
    </ListItem>
  );
};

export { TodoItem };
