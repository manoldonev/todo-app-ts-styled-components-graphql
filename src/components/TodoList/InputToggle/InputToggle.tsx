import { InputMode, useStore } from '../../../store';
import { InputBox } from '../InputBox';
import { SearchBox } from '../SearchBox';

const InputToggle = (): JSX.Element | null => {
  const mode = useStore.useInputMode();

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
