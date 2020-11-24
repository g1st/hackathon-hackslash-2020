import { useParams } from 'react-router-dom';

const Class = () => {
  const { className } = useParams();
  
  return <div>{className} class page</div>;
};

export default Class;
