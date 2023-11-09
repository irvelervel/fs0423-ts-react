import { useParams } from 'react-router-dom'

// sono puntiglioso! definisco l'interfaccia per l'oggetto params
// interface PastaComponentParams {
//   pasta: string
// }

const PastaComponent = () => {
  const params = useParams<{ pasta: string }>()

  return (
    <>
      <div>Benvenuto nella pagina delle pastasciutte!</div>
      <p>Stai cercando la pasta: {params.pasta}</p>
    </>
  )
}

export default PastaComponent
