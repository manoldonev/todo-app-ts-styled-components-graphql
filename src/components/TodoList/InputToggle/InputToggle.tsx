import { InputMode, useTodoState } from '../../../context/todo';
import { InputBox } from '../InputBox';
import { SearchBox } from '../SearchBox';

const InputToggle = (): JSX.Element | null => {
  const { inputMode: mode } = useTodoState();

  switch (mode) {
    case InputMode.Add: {
      return <InputBox />;
    }
    case InputMode.Search: {
      return <SearchBox />;
    }
    default: {
      return null;
    }
  }
};

export { InputToggle };
