import type { TodosQuery } from '../../generated';
import { useTodosQuery } from '../../generated';
import type { TodoState } from '../../store';
import { useStore, FilterMode } from '../../store';

const enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

const pageSize = 5;

const pageSelector = (state: TodoState): number => state.currentPage;
const filterModeSelector = (state: TodoState): FilterMode => state.filterMode;

const useTodos = (): {
  data: TodosQuery | undefined;
  isFetching: boolean;
  isPreviousData: boolean;
  hasMoreData: boolean;
} => {
  const currentPage = useStore(pageSelector);
  const filterMode = useStore(filterModeSelector);
  let input = null;
  if (filterMode === FilterMode.Active) {
    input = { done_eq: false };
  } else if (filterMode === FilterMode.Done) {
    input = { done_eq: true };
  }

  const queryVariables = {
    page: currentPage,
    limit: pageSize,
    input,
    sort: 'id',
    direction: SortDirection.Descending,
  };

  const { data, isFetching, isPreviousData } = useTodosQuery(queryVariables, {
    keepPreviousData: true,
    staleTime: 5000,
  });

  const { data: nextData } = useTodosQuery({
    ...queryVariables,
    page: currentPage + 1,
  });

  return {
    data,
    isFetching,
    isPreviousData,
    hasMoreData: nextData?.todos?.length != null && nextData.todos.length > 0,
  };
};

export { useTodos };
