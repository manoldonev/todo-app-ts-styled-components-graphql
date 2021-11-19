import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = (): JSX.Element => {
  return <FontAwesomeIcon icon={faSpinner} spin />;
};

export { Spinner };
