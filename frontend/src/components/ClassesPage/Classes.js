import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import Spinner from '../UI/Spinner'
import "./Classes.scss";

const Classes = () => {
	const { status, data, error } = useFetch('http://localhost:3001/api/classes');
	if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return (
				<div>
					<h1>Select a class..</h1>
					<div className="row" id="main">
						{data.map(({name}) => (
							<div className="col-6 rounded " key={name}>
								<Link to={`/class/${name}`}>
									<img
										src="https://avisassets.abgemea.com/dam/jcr:ca43cc10-cfed-4364-b116-a5b4091a3ee7/birmingham-cityscape-inspirational-desktop.jpg"
										className="rounded mx-auto d-block"
										id="cityImage"
										alt="city"
									/>
									<h2 id="className">{name}</h2>
								</Link>
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