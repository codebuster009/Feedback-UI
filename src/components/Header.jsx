import PropTypes from 'prop-types'
const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

//setting default props
Header.defaultProps ={
  text: 'Feedback UI',
}
//setting the proptypes
Header.propTypes = {
  text: PropTypes.string
}

export default Header;

