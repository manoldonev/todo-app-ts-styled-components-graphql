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
  currentPage: number;
  togglePage: (newPage: number) => void;
  filterMode: FilterMode;
  toggleFilterMode: (filterMode: FilterMode) => void;
  inputMode: InputMode;
  toggleInputMode: (inputMode: InputMode) => void;
  query: string;
  updateQuery: (query: string) => void;
}

const defaultPage = 1;

const useStore = create<TodoState>((set) => ({
  currentPage: defaultPage,
  togglePage: (page) => {
    set(() => ({ currentPage: page }));
  },

  filterMode: FilterMode.All,
  toggleFilterMode: (filterMode) => {
    set(() => ({ filterMode, currentPage: defaultPage }));
  },

  inputMode: InputMode.Add,
  toggleInputMode: (inputMode) => {
    set(() => ({
      inputMode,
      filterMode: FilterMode.All,
      currentPage: defaultPage,
    }));
  },

  query: '',
  updateQuery: (query) => {
    set(() => ({ query }));
  },
}));

export { useStore, InputMode, FilterMode };
export type { TodoState };
