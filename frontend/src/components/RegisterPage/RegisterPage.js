import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../LoginForm/LoginForm';
import HeroImage from './HeroImage/HeroImage';
import './RegisterPage.scss';
import RegisterForm from '../RegisterPage/RegisterForm';

const RegisterPage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: 'last' }}>
        <div>
          <h1 className="app-title">Student tracker</h1>
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
        <RegisterForm />
      </Col>
      <HeroImage />
    </Row>
  );
};

export default RegisterPage;
