import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner';
import { serverURL } from '../../config';

const ModulesDropdown = ({ subject, setSubject }) => {
  const { data, error } = useFetch(`${serverURL}/api/modules`);

  if (error) {
    return <div>Error</div>;
  } else if (data) {
    return (
      <DropdownButton
        id="dropdown-module-button"
        size="lg"
        title={subject}
        className="module-dropdown mr-5"
      >
        <Dropdown.Item eventKey="All modules" onSelect={setSubject}>
          All modules
        </Dropdown.Item>
        {data.map((subject, i) => {
          return (
            <Dropdown.Item
              key={i}
              eventKey={subject.name}
              onSelect={setSubject}
            >
              {subject.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  } else {
    return <Spinner />;
  }
};

export default ModulesDropdown;
