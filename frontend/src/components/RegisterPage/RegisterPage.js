import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../HomePage/HeroImage/HeroImage';
import './RegisterPage.scss';
import RegisterForm from '../RegisterPage/RegisterForm';

const RegisterPage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: 'last' }} className="register-features mb-5">
        <div>
          <h1 className="app-title">Sign up</h1>
        </div>
        <RegisterForm />
      </Col>
      <HeroImage />
    </Row>
  );
};

export default RegisterPage;
