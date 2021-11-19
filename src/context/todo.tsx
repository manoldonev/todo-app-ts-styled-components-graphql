import produce from 'immer';
import React from 'react';

interface DataItem {
  id: string;
  task: string;
  done: boolean;
}

interface TodoState {
  currentPage: number;
  pageSize: number;
  hasMore: boolean;
  filterMode: FilterMode;
}

const enum ActionType {
  TogglePage,
  ToggleFilter,
}

enum FilterMode {
  All = 'all',
  Active = 'active',
  Done = 'done',
}

interface Action {
  type: ActionType;
  numericPayload?: number;
  stringPayload?: string;
}

const TodoStateContext = React.createContext<TodoState | null>(null);
const TodoDispatchContext = React.createContext<React.Dispatch<Action> | null>(
  null,
);

function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case ActionType.TogglePage: {
      return produce(state, (draft) => {
        if (action.numericPayload == null) {
          throw new Error(`${action.type}: payload not specified`);
        }

        draft.currentPage = action.numericPayload;
      });
    }
    case ActionType.ToggleFilter: {
      return produce(state, (draft) => {
        const filterKey = action.stringPayload;
        if (filterKey == null || !(filterKey in FilterMode)) {
          throw new Error(`${action.type}: filter ${filterKey} not found`);
        }

        draft.filterMode = FilterMode[filterKey as keyof typeof FilterMode];
        draft.currentPage = 1;
      });
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

const TodoProvider = ({
  children,
  reducer = todoReducer,
}: {
  children: React.ReactNode;
  reducer?: (state: TodoState, action: Action) => TodoState;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, {
    currentPage: 1,
    pageSize: 5,
    hasMore: false,
    filterMode: FilterMode.All,
  });

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

function useTodoState(): TodoState {
  const context = React.useContext(TodoStateContext);
  if (context === null) {
    throw new Error('useTodoState hook works in the context of a TodoProvider');
  }

  return context;
}

function useTodoDispatch(): React.Dispatch<Action> {
  const context = React.useContext(TodoDispatchContext);
  if (context === null) {
    throw new Error(
      'useTodoDispatch hook works in the context of a TodoProvider ',
    );
  }

  return context;
}

export {
  TodoProvider,
  useTodoState,
  useTodoDispatch,
  todoReducer,
  ActionType,
  FilterMode,
};

export type { DataItem, Action };
