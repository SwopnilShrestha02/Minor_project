import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container className='my-4 py-3'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
