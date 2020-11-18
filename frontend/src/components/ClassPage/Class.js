import { useParams } from 'react-router-dom';
import { fakeData } from '../../fakeData';
const Class = () => {
  const { className } = useParams();
  const [fakeClass] = fakeData.filter((fakeClass) => {
    return fakeClass.name === className;
  });
  return <div>{fakeClass.name} class page</div>;
};

export default Class;
