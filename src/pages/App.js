import React from 'react';
import ProductCreateForm from 'components/sections/ProductCreateForm/ProductCreateForm';
import ProductGrid from 'components/sections/ProductGrid/ProductGrid';
import useList from 'hooks/useList';
import usePermissions from 'hooks/usePermissions';

import './app.scss';

const App = function () {
  const {
    products, addItem, updateItem, deleteItem,
  } = useList();
  const permissions = usePermissions();

  return (
    <>
      <header id="header">
        <h1>Product Manager</h1>
      </header>
      <main>
        {permissions.create && (
          <ProductCreateForm
            onCreate={addItem}
          />
        )}
        {permissions.read && (
          <ProductGrid
            products={products}
            {...(permissions.update && { onUpdate: updateItem })}
            {...(permissions.delete && { onDelete: deleteItem })}
          />
        )}
      </main>
    </>
  );
};

export default App;
