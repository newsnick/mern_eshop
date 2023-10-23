import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <div className='product-carousel-container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Carousel pause='hover' className='bg-dark'>
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`} className='carousel-link'>
                <Image
                  src={product.image}
                  alt={product.name}
                  className='carousel-image'
                  fluid
                />

                <Carousel.Caption className='carousel-caption'>
                  <h2 className='product-name'>
                    {product.name} (${product.price})
                  </h2>
                  <p className='product-description'>{product.description}</p>
                  <h2 className='product-name-mobile'>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>{' '}
            </Carousel.Item>
          ))}
        </Carousel>
      )}{' '}
    </div>
  )
}

export default ProductCarousel
