import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import img from './hands.jpeg';

const HeroImage = () => {
  return (
    <Col className="pr-lg-5">
      <Figure>
        <Figure.Image rounded src={img} alt="Diverse hands" />
        <Figure.Caption>
          Together, we can help disadvantaged adults find meaningful work.
        </Figure.Caption>
      </Figure>
    </Col>
  );
};

export default HeroImage;
