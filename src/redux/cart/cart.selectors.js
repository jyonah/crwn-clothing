import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems => createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartitems => 
    cartItems.reduce(
        (acc, cartItem) => 
            acc + cartItem.quantity, 
            0
    )
)