import logo from '../../images/cyf_logo.png';
import './Header.scss';

const Logo = () => {
  return (
    <img
      src={logo}
      // width="190"
      // height="60"
      className="d-inline-block align-top header-image"
      alt="codeyourfuture logo"
    />
  );
};

export default Logo;
