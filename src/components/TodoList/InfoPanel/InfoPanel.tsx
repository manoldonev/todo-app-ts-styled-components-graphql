import styled from 'styled-components/macro';
import type { TodoState } from '../../../store';
import { InputMode, useStore } from '../../../store';

const Paragraph = styled.p`
  position: absolute;
  font-size: 1.44rem;
  margin-top: 2rem;
  left: 0;
  right: 0;
  color: #6b6b6b;
  text-align: center;
`;

const INFO_SHORTCUT_KEYS =
  'Press `Shift + S` to search and `Shift + A` to create a new item.';
const INFO_CANCEL_SHORTCUT_KEY = 'Press `Esc` to cancel.';

const selector = (state: TodoState): InputMode => state.inputMode;

const InfoPanel = (): JSX.Element => {
  const mode = useStore(selector);
  const message =
    mode === InputMode.None ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

  return <Paragraph>{message}</Paragraph>;
};

export { InfoPanel };
