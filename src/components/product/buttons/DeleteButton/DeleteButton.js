import PropTypes from 'prop-types';
import Button from 'components/generic/Button';
import API from 'api/responses';
import useProductForm from 'hooks/useProductForm';

const DeleteButton = function ({ onDelete }) {
  const {
    product,
    product: { name } = {},
  } = useProductForm();

  const deleteProduct = () => {
    const confirmation = window.confirm(`Are you sure you want to permanently delete ${name || 'the product'}?`);
    if (!confirmation) return;

    fetch(API.OK_RESPONSE, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product.id),
    })
      .then((response) => response.json())
      .then(() => {
        onDelete(product);
      })
      .catch((error) => {
        window.alert('An error occurred while deleting the product. Please try again.');
        console.error('Error when deleting a product:', product, error);
      });
  };

  return (
    <Button onClick={deleteProduct}>
      Delete
    </Button>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
