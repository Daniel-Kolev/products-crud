import PropTypes from 'prop-types';
import useProductForm from 'hooks/useProductForm';

const ProductForm = function ({ children, className = '' }) {
  const {
    form,
  } = useProductForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form ref={form} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

ProductForm.defaultProps = {
  className: '',
};

ProductForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default ProductForm;
