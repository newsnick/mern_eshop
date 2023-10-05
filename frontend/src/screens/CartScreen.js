// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
// import { addToCart } from '../actions/cartActions'

// const CartScreen = ({ match, location, history }) => {
//   console.log(`match data: ${match}`)
//   const productId = match.params.id

//   const qty = location.search ? Number(location.search.split('=')[1]) : 1

//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty))
//     }
//   }, [dispatch, productId, qty])

//   return <div>Cart</div>
// }

// export default CartScreen
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useParams, useLocation } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, history }) => {
  const { id } = useParams()
  const productId = id

  // const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const location = useLocation()

  const qty = new URLSearchParams(location.search).get('qty') || 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return <div>Cart</div>
}

export default CartScreen
