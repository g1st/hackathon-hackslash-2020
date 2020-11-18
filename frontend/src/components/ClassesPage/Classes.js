import { Link } from 'react-router-dom';

import { fakeData } from '../../fakeData';

const Classes = () => {
  return (
    <ul>
      {fakeData.map((fakeClass, index) => (
        <li key={index}>
          <Link to={`/class/${fakeClass.name}`}>{fakeClass.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Classes;
