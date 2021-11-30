import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

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

const useStore = createSelectorHooks(
  create<TodoState>((set) => ({
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
  })),
);

export { useStore, InputMode, FilterMode };
export type { TodoState };
