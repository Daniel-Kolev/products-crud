import { useReducer, useCallback } from 'react';

const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const itemsReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ACTIONS.ADD:
    case ACTIONS.UPDATE:
      return { ...state, [action.product.id]: action.product };
    case ACTIONS.DELETE:
      delete newState[action.product.id];
      return newState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useList = () => {
  const [products, dispatch] = useReducer(itemsReducer, {
    1638627450147: {
      id: '1638627450147',
      name: 'Potato',
      price: 2,
      currency: 'BGN',
    },
    1638627450148: {
      id: '1638627450148',
      name: 'Carrot',
      price: 1,
      currency: 'BGN',
    },
    1638627450149: {
      id: '1638627450149',
      name: 'PC',
      price: 500,
      currency: 'USD',
    },
  });

  const addItem = useCallback(
    (product) => dispatch({ type: ACTIONS.ADD, product }),
    [dispatch],
  );
  const updateItem = useCallback(
    (product) => dispatch({ type: ACTIONS.UPDATE, product }),
    [dispatch],
  );
  const deleteItem = useCallback(
    (product) => dispatch({ type: ACTIONS.DELETE, product }),
    [dispatch],
  );

  return {
    products, addItem, updateItem, deleteItem,
  };
};

export default useList;
