import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

export default function RecomendationSection({ recommendationName }) {
  const [cartData, setCartData] = useState({})
  console.log(cartData)

  useEffect(() => {
    async function test() {
      const { data } = await axios.get(
        `/api/products?keyword=${recommendationName}`
      )
      setCartData(data)
    }
    test()
  }, [recommendationName])

  return (
    <>
      {cartData.products ? (
        <>
          <Col sm={12} md={6} lg={4} xl={2}>
            {cartData.products && <Product product={cartData.products[0]} />}
          </Col>
        </>
      ) : null}
    </>
  )
}
