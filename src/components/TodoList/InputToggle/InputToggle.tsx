import type { TodoState } from '../../../store';
import { InputMode, useStore } from '../../../store';
import { InputBox } from '../InputBox';
import { SearchBox } from '../SearchBox';

const selector = (state: TodoState): InputMode => state.inputMode;

const InputToggle = (): JSX.Element | null => {
  const mode = useStore(selector);

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
