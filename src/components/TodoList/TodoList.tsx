import styled from 'styled-components/macro';
import { TodoItem } from './TodoItem/TodoItem';
import { useTodos } from './useTodos';
import { Spinner } from './Spinner';

const Section = styled.section`
  background-color: #fff;
  padding: 2rem 2rem 1rem 2rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.2rem;
  margin: 3rem auto;
  min-width: 32rem;
  max-width: 60rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const TodoList = (): JSX.Element => {
  const { data, isFetching } = useTodos();

  return (
    <Section>
      {isFetching && (
        <p>
          <Spinner /> Loading your list...
        </p>
      )}
      <StyledList>
        {data?.todos?.map(
          (todo) => todo && <TodoItem key={todo.id} data={todo} />,
        )}
      </StyledList>
    </Section>
  );
};

export { TodoList };
