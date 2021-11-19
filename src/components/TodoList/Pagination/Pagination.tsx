import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  ActionType,
  useTodoDispatch,
  useTodoState,
} from '../../../context/todo';
import { useTodos } from '../useTodos';

const PaginationList = styled.ul`
  margin-right: auto;
  list-style-type: none;
  padding: 0;
`;

const PaginationItem = styled.li`
  display: inline;
`;

const Button = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: 0;
  font-size: calc(max(2rem, 20px));
  cursor: pointer;
  transition: 0.3s all;
  opacity: 0.4;

  &:hover:enabled {
    opacity: 1;
  }
`;

const Pagination = (): JSX.Element => {
  const { currentPage: page } = useTodoState();
  const dispatch = useTodoDispatch();
  const { isPreviousData, hasMoreData } = useTodos();

  return (
    <>
      Current page: {page}
      <PaginationList>
        <PaginationItem>
          <Button
            onClick={() =>
              dispatch({
                type: ActionType.TogglePage,
                numericPayload: Math.max(page - 1, 1),
              })
            }
            disabled={page === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            onClick={() =>
              dispatch({
                type: ActionType.TogglePage,
                numericPayload: hasMoreData ? page + 1 : page,
              })
            }
            disabled={isPreviousData || !hasMoreData}
          >
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
          </Button>
        </PaginationItem>
      </PaginationList>
    </>
  );
};

export { Pagination };
