import PropTypes from 'prop-types';
import useProductForm from 'hooks/useProductForm';

const ProductInput = function ({ labeled = true, alwaysUpdating = false }) {
  const {
    product: {
      name,
      price,
      currency,
    } = {},
    setName,
    setPrice,
    setCurrency,
    isUpdating,
  } = useProductForm();

  if (!alwaysUpdating && !isUpdating) return null;

  const nameInput = (
    <input
      id="name"
      type="text"
      placeholder="Potato, carrot, etc."
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      title="Please enter a name for the product"
    />
  );

  const priceInput = (
    <input
      id="price"
      type="number"
      placeholder="Price"
      min="0.01"
      max="1000000"
      step="0.01"
      value={Number(price).toString()}
      onChange={(e) => setPrice(Number(e.target.value))}
      required
      title="Price must be a number between 0.01 and 1 000 000"
    />
  );

  const currencyInput = (
    <input
      id="currency"
      type="text"
      placeholder="BGN, USD, EUR, etc."
      value={currency}
      onChange={(e) => setCurrency(e.target.value.toUpperCase())}
      required
      pattern="[A-Z]{3}"
      title="Currency must be a 3-letter code"
    />
  );

  if (labeled) {
    return (
      <>
        <label htmlFor="name">
          Name
          {nameInput}
        </label>
        <label htmlFor="price">
          Price
          {priceInput}
        </label>
        <label htmlFor="currency">
          Currency
          {currencyInput}
        </label>
      </>
    );
  }

  return (
    <>
      {nameInput}
      {priceInput}
      {currencyInput}
    </>
  );
};

ProductInput.defaultProps = {
  labeled: true,
  alwaysUpdating: false,
};

ProductInput.propTypes = {
  labeled: PropTypes.bool,
  alwaysUpdating: PropTypes.bool,
};

export default ProductInput;
