import produce from 'immer';
import { useReducer, useCallback, useEffect } from 'react';

enum ActionType {
  Keydown,
  Keyup,
  Reset,
}

interface Action {
  type: ActionType;
  key?: string;
  payload?: KeyMapping;
}

interface KeyMapping {
  [key: string]: boolean;
}

const blacklistedTargets = ['input', 'textarea'];

const keysReducer = (state: KeyMapping, action: Action): KeyMapping => {
  switch (action.type) {
    case ActionType.Keydown: {
      return produce(state, (draft) => {
        if (action.key == null) {
          throw new Error(`${action.type}: missing key`);
        }

        draft[action.key] = true;
      });
    }
    case ActionType.Keyup: {
      return produce(state, (draft) => {
        if (action.key == null) {
          throw new Error(`${action.type}: missing key`);
        }

        draft[action.key] = false;
      });
    }
    case ActionType.Reset: {
      if (action.payload == null) {
        throw new Error(`${action.type}: missing payload`);
      }

      return { ...action.payload };
    }
    default: {
      return state;
    }
  }
};

const useHotkeys = (
  hotkeys: string[],
  callback: (keys: KeyMapping) => void,
): void => {
  if (!hotkeys.length) {
    throw new Error(
      'The first parameter to `useHotkey` must contain at least one `KeyboardEvent.key` string.',
    );
  }

  const lowerCaseKeys = hotkeys.map((key) => key.toLowerCase());
  const initialKeyMapping = lowerCaseKeys.reduce<KeyMapping>(
    (keys, currentKey) => {
      keys[currentKey] = false;
      return keys;
    },
    {},
  );

  const [keys, setKeys] = useReducer(keysReducer, initialKeyMapping);

  const handleKeydown = useCallback(
    (keydownEvent: KeyboardEvent) => {
      const { key, target, repeat } = keydownEvent;
      const lowerCaseKey = key.toLowerCase();

      if (
        repeat ||
        blacklistedTargets.includes(
          (target as HTMLElement).tagName.toLowerCase(),
        ) ||
        !lowerCaseKeys.includes(lowerCaseKey)
      ) {
        return;
      }

      if (!keys[lowerCaseKey]) {
        setKeys({ type: ActionType.Keydown, key: lowerCaseKey });
      }
    },
    [keys, lowerCaseKeys],
  );

  const handleKeyup = useCallback(
    (keyupEvent: KeyboardEvent) => {
      const { key, target } = keyupEvent;
      const lowerCaseKey = key.toLowerCase();

      if (
        blacklistedTargets.includes(
          (target as HTMLElement).tagName.toLowerCase(),
        ) ||
        !lowerCaseKeys.includes(lowerCaseKey)
      ) {
        return;
      }

      if (keys[lowerCaseKey]) {
        setKeys({ type: ActionType.Keyup, key: lowerCaseKey });
      }
    },
    [keys, lowerCaseKeys],
  );

  useEffect(() => {
    if (Object.values(keys).every((value) => value)) {
      callback(keys);
      setKeys({ type: ActionType.Reset, payload: initialKeyMapping });
    }
  }, [callback, keys, initialKeyMapping]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown, true);
    return () => window.removeEventListener('keydown', handleKeydown, true);
  }, [handleKeydown]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup, true);
    return () => window.removeEventListener('keyup', handleKeyup, true);
  }, [handleKeyup]);
};

export { useHotkeys };
