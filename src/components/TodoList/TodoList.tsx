import styled from 'styled-components/macro';
import { TodoItem } from './TodoItem/TodoItem';
import { useTodos } from './useTodos';
import { Header } from './Header';
import { Footer } from './Footer';
import { InputToggle } from './InputToggle';

const Section = styled.section`
  background-color: #fff;
  padding: 2rem 2rem 1rem 2rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.2rem;
  margin: 3rem auto;
  min-width: 32rem;
  max-width: 60rem;
  position: relative;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const TodoList = (): JSX.Element => {
  const { data } = useTodos();

  return (
    <Section>
      <Header />
      <InputToggle />

      <StyledList>
        {data?.todos?.map(
          (todo) => todo && <TodoItem key={todo.id} data={todo} />,
        )}
      </StyledList>
      <Footer />
      {/* {isFetching && (
        <p style={{ position: 'absolute', left: 10, bottom: 10 }}>
          <Spinner /> Loading...
        </p>
      )} */}
    </Section>
  );
};

export { TodoList };
