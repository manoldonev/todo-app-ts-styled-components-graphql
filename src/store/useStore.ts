import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import type { StateCreator } from 'zustand';
import { pipe } from 'remeda';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import type { Draft } from 'immer';
import { withImmer } from './middleware';

enum FilterMode {
  All = 'all',
  Active = 'active',
  Done = 'done',
}

enum InputMode {
  Add,
  Search,
  None,
}

interface TodoState {
  page: number;
  togglePage: (newPage: number) => void;
  filterMode: FilterMode;
  toggleFilterMode: (filterMode: FilterMode) => void;
  inputMode: InputMode;
  toggleInputMode: (inputMode: InputMode) => void;
  query: string;
  updateQuery: (query: string) => void;
}

const defaultPage = 1;

const config: StateCreator<
  TodoState,
  (fn: (draft: Draft<TodoState>) => void) => void
> = (set) => ({
  page: defaultPage,
  togglePage: (page) => {
    set(() => ({ page }));
  },

  filterMode: FilterMode.All,
  toggleFilterMode: (filterMode) => {
    set(() => ({ filterMode, page: defaultPage }));
  },

  inputMode: InputMode.Add,
  toggleInputMode: (inputMode) => {
    set(() => ({
      inputMode,
      filterMode: FilterMode.All,
      page: defaultPage,
    }));
  },

  query: '',
  updateQuery: (query) => {
    set(() => ({ query }));
  },
});

const useStore = pipe(
  config,
  withImmer,
  (result) =>
    persist(result, { name: 'todo-storage', getStorage: () => sessionStorage }),
  (result) => create<TodoState>(result),
  createSelectorHooks,
);

export { useStore, InputMode, FilterMode };
export type { TodoState };
