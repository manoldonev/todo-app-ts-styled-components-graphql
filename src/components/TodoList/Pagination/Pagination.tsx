import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useTodos } from '../useTodos';
import { ImageButton } from '../../common/ImageButton';
import type { TodoState } from '../../../store';
import { useStore } from '../../../store';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const PaginationList = styled.ul`
  margin-right: auto;
  list-style-type: none;
  padding: 0;
`;

const PaginationItem = styled.li`
  display: inline;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2.7rem;
`;

const selector = (state: TodoState): number => state.currentPage;
const toggleSelector = (state: TodoState): ((newPage: number) => void) =>
  state.togglePage;

const Pagination = (): JSX.Element => {
  const page = useStore(selector);
  const togglePage = useStore(toggleSelector);
  const { isPreviousData, hasMoreData } = useTodos();

  return (
    <Wrapper>
      Current page: {page}
      <PaginationList>
        <PaginationItem>
          <ImageButton
            aria-label="Previous Page"
            onClick={() => togglePage(Math.max(page - 1, 1))}
            disabled={page === 1}
          >
            <StyledFontAwesomeIcon icon={faChevronLeft} fixedWidth />
          </ImageButton>
        </PaginationItem>
        <PaginationItem>
          <ImageButton
            aria-label="Next Page"
            onClick={() => togglePage(hasMoreData ? page + 1 : page)}
            disabled={isPreviousData || !hasMoreData}
          >
            <StyledFontAwesomeIcon icon={faChevronRight} fixedWidth />
          </ImageButton>
        </PaginationItem>
      </PaginationList>
    </Wrapper>
  );
};

export { Pagination };
