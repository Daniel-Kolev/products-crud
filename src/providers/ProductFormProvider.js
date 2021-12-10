import {
  useState, useRef, useMemo, createContext,
} from 'react';
import PropTypes from 'prop-types';

const ProductFormContext = createContext();

const ProductFormProvider = function ({
  children,
  product: {
    id = '',
    name: defaultName = '',
    price: defaultPrice = 0,
    currency: defaultCurrency = '',
  } = {},
}) {
  const [name, setName] = useState(defaultName);
  const [price, setPrice] = useState(defaultPrice);
  const [currency, setCurrency] = useState(defaultCurrency);

  const [isUpdating, setIsUpdating] = useState(false);

  const form = useRef();
  const resetForm = () => {
    setName('');
    setPrice(0);
    setCurrency('');
  };

  const productForm = useMemo(
    () => ({
      product: {
        id, name, price, currency,
      },
      setName,
      setPrice,
      setCurrency,
      isUpdating,
      setIsUpdating,
      form,
      resetForm,
    }),
    [name, price, currency, isUpdating],
  );

  return (
    <ProductFormContext.Provider value={productForm}>
      {children}
    </ProductFormContext.Provider>
  );
};

ProductFormProvider.defaultProps = {
  product: {
    id: '',
    name: '',
    price: 0,
    currency: '',
  },
};

ProductFormProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default ProductFormProvider;
export { ProductFormContext };
