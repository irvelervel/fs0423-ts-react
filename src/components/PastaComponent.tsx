import { useParams } from 'react-router-dom'

// sono puntiglioso! definisco l'interfaccia per l'oggetto params
// dichiarare un tipo invece di un'interfaccia risolve il problema...
type PastaComponentParams = {
  pasta: string
}

const PastaComponent = () => {
  const params = useParams<PastaComponentParams>()

  return (
    <>
      <div>Benvenuto nella pagina delle pastasciutte!</div>
      <p>Stai cercando la pasta: {params.pasta}</p>
    </>
  )
}

export default PastaComponent
