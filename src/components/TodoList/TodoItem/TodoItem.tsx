import styled from 'styled-components/macro';
import { useQueryClient } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import type { DataItem } from '../../../context/todo';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../generated';
import { SwipeToDelete } from './SwipeToDelete';
import { ImageButton } from '../../common/ImageButton';

const ListItem = styled.li<{ done: boolean }>`
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

const OverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DeleteButton = styled(ImageButton)`
  background-color: white;
  padding: 0 1.5rem;
  height: 100%;
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

  const [overlayVisible, setOverlayVisible] = useState(false);
  const isTouchEnabled = useMediaQuery('(pointer: coarse)');

  const toggleItem = (): void => {
    updateTodo({ id, input: { done: !done } });
  };

  const deleteItem = (): void => {
    deleteTodo({ id });
  };

  return (
    <ListItem
      done={done}
      onMouseEnter={() => !isTouchEnabled && setOverlayVisible(true)}
      onMouseLeave={() => !isTouchEnabled && setOverlayVisible(false)}
    >
      <SwipeToDelete onSwiped={deleteItem} onTap={toggleItem}>
        <Wrapper>
          <Label htmlFor={id}>
            <Checkbox id={id} checked={done} onChange={toggleItem} />
            {task}
          </Label>
        </Wrapper>
        {overlayVisible && (
          <OverlayWrapper>
            <DeleteButton onClick={deleteItem} aria-label="Delete Item">
              <FontAwesomeIcon icon={faTrashAlt} />
            </DeleteButton>
          </OverlayWrapper>
        )}
      </SwipeToDelete>
    </ListItem>
  );
};

export { TodoItem };
