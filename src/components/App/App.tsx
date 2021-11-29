import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { TodoList } from '../TodoList';
import { queryClient } from './queryClient';

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
      <Toaster />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export { App };
