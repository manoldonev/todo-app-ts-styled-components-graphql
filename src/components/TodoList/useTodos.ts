import { useTodoState } from '../../context/todo';
import type { TodosQuery } from '../../generated';
import { useTodosQuery } from '../../generated';

const useTodos = (): {
  data: TodosQuery | undefined;
  isFetching: boolean;
  isPreviousData: boolean;
  hasMoreData: boolean;
} => {
  const { currentPage, pageSize } = useTodoState();

  const { data, isFetching, isPreviousData } = useTodosQuery(
    { page: currentPage, limit: pageSize },
    { keepPreviousData: true, staleTime: 5000 },
  );

  const { data: nextData } = useTodosQuery({
    page: currentPage + 1,
    limit: pageSize,
  });

  return {
    data,
    isFetching,
    isPreviousData,
    hasMoreData: nextData?.todos?.length != null && nextData.todos.length > 0,
  };
};

export { useTodos };
