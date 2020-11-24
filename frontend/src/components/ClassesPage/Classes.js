import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner'
import "./Classes.scss";
import wm1 from '../../images/classes/wm1.jpg';
import wm2 from '../../images/classes/wm2.jpg';
import london from '../../images/classes/london.jpg';
import glasgow from '../../images/classes/glasgow.jpg';
import fallbackImage from '../../images/shot2.png';

const Classes = () => {
	const { status, data, error } = useFetch('http://localhost:3001/api/classes');
	if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return (
      <div>
        <h1 className="pb-5">Select a class..</h1>
        <div className="row">
          {data.map(({ name }) => (
						<div className="col-12 col-md-6 col-xl-4 rounded " key={name}>
							<div className="text-center image-container">
								<Link to={`/class/${name}`}>
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
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
	
export default Classes;