import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner';
import './Classes.scss';
import wm1 from '../../images/classes/wm1.jpg';
import wm2 from '../../images/classes/wm2.jpg';
import london from '../../images/classes/london.jpg';
import glasgow from '../../images/classes/glasgow.jpg';
import fallbackImage from '../../images/shot.png';
import { serverURL } from '../../config';

const Classes = () => {
  let { status, data, error } = useFetch(`${serverURL}/api/classes`);

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <ClassesList data={data} />;
  } else {
    return <Spinner />;
  }
};

const ClassesList = ({ data }) => {
  const [classes, setClasses] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredClasses = data.filter((cohort) =>
      cohort.name.toLowerCase().includes(term)
    );
    setClasses(filteredClasses);
  };

  return (
    <div>
      <InputGroup className="classes-filter">
        <h1 className="mb-3">Select a class...</h1>
        <FormControl
          type="text"
          placeholder="Filter by name"
          onChange={handleSearch}
          className="classes-input"
        />
      </InputGroup>

      <div className="row">
        {classes.length > 0 ? (
          classes.map(({ name }) => (
            <div className="col-12 col-md-6 col-xl-4 rounded " key={name}>
              <div className="text-center image-container">
                <Link to={`/class/${name}`}>
                  {/* Until classes' images are stored somewhere and links to those image locations are saved in the database we are doing very naive checking below for our fake data */}
                  <img
                    src={
                      name === 'westmidlands1'
                        ? wm1
                        : name === 'westmidlands2'
                        ? wm2
                        : name === 'london1'
                        ? london
                        : name === 'Scotland1'
                        ? glasgow
                        : fallbackImage
                    }
                    className="rounded mx-auto class-image"
                    alt={name}
                  />
                  <h2 className="region">{name}</h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>Sorry, no matching classes.</div>
        )}
      </div>
    </div>
  );
};

export default Classes;
