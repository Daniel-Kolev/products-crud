import PropTypes from 'prop-types';
import API from 'api/responses';
import Button from 'components/generic/Button';
import useProductForm from 'hooks/useProductForm';

import './createButton.scss';

const CreateButton = function ({ onCreate }) {
  const {
    product,
    form: { current: form },
    resetForm,
  } = useProductForm();

  const createProduct = () => {
    if (!form?.checkValidity()) return;

    fetch(API.OK_RESPONSE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        // after a successful creation of the product, we receive the id from the server
        const idFromServer = Date.now().toString();
        onCreate({ ...product, id: idFromServer });
        resetForm();
      })
      .catch((error) => {
        window.alert('An error occurred while creating the product. Please try again.');
        console.error('Error when creating a product:', product, error);
      });
  };

  return (
    <Button className="btn-create" type="submit" onClick={createProduct}>
      Create
    </Button>
  );
};

CreateButton.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateButton;
