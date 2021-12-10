import PropTypes from 'prop-types';

const Button = function ({ children, type = 'button', ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string,
};

export default Button;
