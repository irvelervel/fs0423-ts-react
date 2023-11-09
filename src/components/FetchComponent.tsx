import { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import SingleReservation from './SingleReservation'
import Reservation from '../interfaces/reservation'

const FetchComponent = () => {
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    // faccio la fetch per riempire "reservations"
    fetch('https://striveschool-api.herokuapp.com/api/reservation')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore brutto brutto nella fetch!')
        }
      })
      .then((data) => {
        // data è l'array di prenotazioni
        setReservations(data)
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Prenotazioni di Epistaurant</h2>
          <ListGroup>
            {reservations.map((r) => {
              return <SingleReservation reservation={r} key={r._id} />
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default FetchComponent
