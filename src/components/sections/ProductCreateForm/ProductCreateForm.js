import PropTypes from 'prop-types';
import CreateButton from 'components/product/buttons/CreateButton/CreateButton';
import ProductFormProvider from 'providers/ProductFormProvider';
import ProductForm from 'components/product/ProductForm/ProductForm';
import ProductInput from 'components/product/ProductInput/ProductInput';

import './productCreateFrom.scss';

const ProductCreateForm = function ({ onCreate }) {
  return (
    <section className="create-product-form">
      <div className="create-product-form__description">
        <h2>How to add a product?</h2>
        <p>
          In order to add a product, you need to fill the form and click the button below it.
          <br />
          Make sure you abide by the following restrictions:
        </p>
        <ul>
          <li>Price must be a number between 0.01 and 1 000 000</li>
          <li>Currency must be a 3-letter code</li>
        </ul>
        <br />
        <span>If you need help, please reach us by calling </span>
        <phone>+35912345678</phone>
      </div>
      <ProductFormProvider>
        <ProductForm>
          <ProductInput alwaysUpdating />
          <CreateButton onCreate={onCreate} />
        </ProductForm>
      </ProductFormProvider>
    </section>
  );
};

ProductCreateForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ProductCreateForm;
