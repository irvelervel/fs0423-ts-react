export default interface Reservation {
  _id: string
  name: string
  phone: string
  smoking: boolean
  dateTime: string
  createdAt: string
  updatedAt: string
  __v: number
  numberOfPeople?: number
  specialRequests?: string
}
