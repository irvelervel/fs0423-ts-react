import { ListGroup } from 'react-bootstrap'
import Reservation from '../interfaces/reservation'

const SingleReservation = ({ reservation }: { reservation: Reservation }) => {
  return (
    <ListGroup.Item>
      {reservation.name} | {reservation.phone}
    </ListGroup.Item>
  )
}

export default SingleReservation
