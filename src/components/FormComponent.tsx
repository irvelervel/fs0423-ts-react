import { FormEvent, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const FormComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAndConditions, setTermsAndConditions] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // l'evento scaturito dal submit di un form in React si chiama "FormEvent"
    e.preventDefault()
    console.log('invio form')
  }

  return (
    <Container className="text-start">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                checked={termsAndConditions}
                onChange={(e) => {
                  setTermsAndConditions(e.target.checked)
                }}
                label="Agree to T&C"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default FormComponent
