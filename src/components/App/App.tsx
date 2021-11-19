import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { TodoList } from '../TodoList';
import { TodoProvider } from '../../context/todo';
import { queryClient } from './queryClient';

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export { App };
