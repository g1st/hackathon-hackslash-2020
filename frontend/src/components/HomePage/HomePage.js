import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../LoginForm/LoginForm';
import HeroImage from './HeroImage/HeroImage';
import './HomePage.scss';

const HomePage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: 'last' }} className="features mb-5">
        <div>
          <ul className="features-list list-unstyled">
            <li>
              <div className="bullet"></div>
              <div className="feature-title">Attendance marking</div>
            </li>
            <li>
              <div className="bullet"></div>
              <div className="feature-title">Class statistics</div>
            </li>
            <li>
              <div className="bullet"></div>
              <div className="feature-title">Scores</div>
            </li>
          </ul>
        </div>
        <LoginForm />
      </Col>
      <HeroImage />
    </Row>
  );
};

export default HomePage;
