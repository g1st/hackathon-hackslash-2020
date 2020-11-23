import { Link } from "react-router-dom";

import { fakeData } from "../../fakeData";
import "./Classes.scss";

const Classes = () => {
	return (
		<div>
			<h1>Select a class..</h1>
			<div className="row" id="main">
				{fakeData.map((fakeClass) => (
					<div className="col-6 rounded ">
						<Link to={`/class/${fakeClass.name}`}>
							<img
								src={fakeClass.image}
								className="rounded mx-auto d-block"
								id="cityImage"
								alt="photo of city"
							/>
							<h2 id="className">{fakeClass.name}</h2>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Classes;

/*
	<ul>
				{fakeData.map((fakeClass, index) => (
					<li key={index}>
						<Link to={`/class/${fakeClass.name}`}><img src= {fakeClass.image}></img></Link>
					</li>
				))}
        </ul>
*/
