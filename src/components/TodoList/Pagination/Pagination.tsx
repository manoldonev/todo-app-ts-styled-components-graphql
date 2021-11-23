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
import { ImageButton } from '../../common/ImageButton';

const PaginationList = styled.ul`
  margin-right: auto;
  list-style-type: none;
  padding: 0;
`;

const PaginationItem = styled.li`
  display: inline;
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
          <ImageButton
            aria-label="Previous Page"
            onClick={() =>
              dispatch({
                type: ActionType.TogglePage,
                numericPayload: Math.max(page - 1, 1),
              })
            }
            disabled={page === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          </ImageButton>
        </PaginationItem>
        <PaginationItem>
          <ImageButton
            aria-label="Next Page"
            onClick={() =>
              dispatch({
                type: ActionType.TogglePage,
                numericPayload: hasMoreData ? page + 1 : page,
              })
            }
            disabled={isPreviousData || !hasMoreData}
          >
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
          </ImageButton>
        </PaginationItem>
      </PaginationList>
    </>
  );
};

export { Pagination };
