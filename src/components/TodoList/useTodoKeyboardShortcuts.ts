import { useHotkeys } from '../../hooks/useKeyboardShortcut';
import { InputMode, useStore } from '../../store';

const shiftKey = 'shift';
const escapeKey = 'escape';

const useTodoKeyboardShortcuts = (): void => {
  const toggleInputMode = useStore.useToggleInputMode();
  const createModeKeys = [shiftKey, 'a'];
  const searchModeKeys = [shiftKey, 's'];
  const noInputModeKeys = [escapeKey];

  useHotkeys(createModeKeys, () => toggleInputMode(InputMode.Add));
  useHotkeys(searchModeKeys, () => toggleInputMode(InputMode.Search));
  useHotkeys(noInputModeKeys, () => toggleInputMode(InputMode.None));
};

export { useTodoKeyboardShortcuts };
