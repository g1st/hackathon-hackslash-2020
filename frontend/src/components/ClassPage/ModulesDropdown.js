import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner';

const ModulesDropdown = ({ module, setModule }) => {
  const { data, error } = useFetch('http://localhost:3001/api/modules');

  if (error) {
    return <div>Error</div>;
  } else if (data) {
    return (
      <DropdownButton
        id="dropdown-module-button"
        size="lg"
        title={module}
        className="module-dropdown mr-5"
      >
        <Dropdown.Item eventKey="All modules" onSelect={setModule}>
          All modules
        </Dropdown.Item>
        {data.map((m, i) => {
          return (
            <Dropdown.Item key={i} eventKey={m.name} onSelect={setModule}>
              {m.name}
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
