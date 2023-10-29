import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  UPDATE_CART_ITEM_COUNT,
  RESET_CART_ITEM_COUNT,
} from '../constants/cartConstants'

export const cartReducer = (
  state = {
    cartItems: [],
    shippingAddress: {},
    itemCount: 0,
  },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        itemCount: action.payload,
      }
    case RESET_CART_ITEM_COUNT:
      return {
        ...state,
        itemCount: 0,
      }

    default:
      return state
  }
}
