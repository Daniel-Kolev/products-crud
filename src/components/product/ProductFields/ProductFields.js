import useProductForm from 'hooks/useProductForm';

import './productFields.scss';

const ProductFields = function () {
  const {
    product: {
      name,
      price,
      currency,
    },
    isUpdating,
  } = useProductForm();

  if (isUpdating) return null;
  return (
    <>
      <span className="name-field">{name}</span>
      <span>{price}</span>
      <span>{currency}</span>
    </>
  );
};

export default ProductFields;
