import type { TodosQuery } from '../../generated';
import { useTodosQuery } from '../../generated';
import { useStore, FilterMode, InputMode } from '../../store';

const enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

const pageSize = 5;

const useTodos = (): {
  data: TodosQuery | undefined;
  isFetching: boolean;
  isPreviousData: boolean;
  hasMoreData: boolean;
} => {
  const currentPage = useStore.usePage();
  const filterMode = useStore.useFilterMode();
  const inputMode = useStore.useInputMode();
  const query = useStore.useQuery();
  let input = null;
  if (filterMode === FilterMode.Active) {
    input = { done_eq: false };
  } else if (filterMode === FilterMode.Done) {
    input = { done_eq: true };
  }

  if (query !== '' && inputMode === InputMode.Search) {
    // TODO: case-insensitive search after switching to https://hasura.io/
    input = { ...input, task_contains: query };
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
