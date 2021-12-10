import { useRef } from 'react';
import PropTypes from 'prop-types';
import API from 'api/responses';
import Button from 'components/generic/Button';
import useProductForm from 'hooks/useProductForm';

const UpdateButton = function ({ onUpdate }) {
  const {
    product,
    isUpdating,
    setIsUpdating,
    form: { current: form },
  } = useProductForm();

  const originalProduct = useRef();

  const isProductUpdated = () => {
    if (!originalProduct.current) return false;

    return JSON.stringify(product) !== JSON.stringify(originalProduct.current);
  };

  const startUpdate = () => {
    setIsUpdating(true);
    originalProduct.current = { ...product };
  };

  const resetUpdate = () => {
    setIsUpdating(false);
    originalProduct.current = null;
  };

  const finishUpdate = () => {
    if (!form?.checkValidity()) return;

    if (!isProductUpdated()) {
      resetUpdate();
      return;
    }

    fetch(API.OK_RESPONSE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        onUpdate(product);
        resetUpdate();
      })
      .catch((error) => {
        window.alert('An error occurred while updating the product. Please try again.');
        console.error('Error when updating a product:', product, error);
      });
  };

  return (
    <Button
      type={isUpdating ? 'submit' : 'button'}
      onClick={isUpdating ? finishUpdate : startUpdate}
    >
      {isUpdating ? 'Done' : 'Update'}
    </Button>
  );
};

UpdateButton.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateButton;
