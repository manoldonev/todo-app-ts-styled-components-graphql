import { FilterMode, useTodoState } from '../../context/todo';
import type { TodosQuery } from '../../generated';
import { useTodosQuery } from '../../generated';

const enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

const useTodos = (): {
  data: TodosQuery | undefined;
  isFetching: boolean;
  isPreviousData: boolean;
  hasMoreData: boolean;
} => {
  const { currentPage, pageSize, filterMode } = useTodoState();
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
