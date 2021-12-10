import PropTypes from 'prop-types';
import ProductFormProvider from 'providers/ProductFormProvider';
import ProductForm from 'components/product/ProductForm/ProductForm';
import ProductInput from 'components/product/ProductInput/ProductInput';
import UpdateButton from 'components/product/buttons/UpdateButton/UpdateButton';
import DeleteButton from 'components/product/buttons/DeleteButton/DeleteButton';
import ProductFields from 'components/product/ProductFields/ProductFields';

import './productGrid.scss';

const ProductGrid = function ({ products = {}, onUpdate, onDelete }) {
  const productItems = Object.entries(products);

  return (
    <section className="products-section">
      <h2>Products List</h2>
      <div className="products-section__grid">
        <header>
          <span className="name-title">Name</span>
          <span>Price</span>
          <span>Currency</span>
          {(onUpdate || onDelete) && <span>Actions</span>}
        </header>
        {productItems.length === 0
          ? <p>No products in your list ;(</p>
          : productItems.map(
            ([id, product]) => (
              <ProductFormProvider key={id} product={product}>
                <ProductForm className="products-section__grid-item" roduct={product}>
                  <ProductInput labeled={false} />
                  <ProductFields />
                  {onUpdate && <UpdateButton onUpdate={onUpdate} />}
                  {onDelete && <DeleteButton onDelete={onDelete} />}
                </ProductForm>
              </ProductFormProvider>
            ),
          )}
      </div>
    </section>
  );
};

ProductGrid.defaultProps = {
  products: {},
  onUpdate: undefined,
  onDelete: undefined,
};

ProductGrid.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
    }),
  }),
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProductGrid;
