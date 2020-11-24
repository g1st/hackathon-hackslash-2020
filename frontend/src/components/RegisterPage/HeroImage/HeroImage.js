import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import img from '../../../images/studenttracker.png';

const HeroImage = () => {
  return (
    <Col className="pr-lg-5">
      <Image rounded src={img} alt="Diverse hands" className="img-fluid" />
    </Col>
  );
};

export default HeroImage;
