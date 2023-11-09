import { Component } from 'react'

interface ClassComponentProps {
  textContent: string
  h2Color?: string // questa prop è OPZIONALE, nel caso non venga fornita l'invocazione del componente
  // rimarrà comunque valida
}

interface ClassComponentState {
  counter: null | number
  firstName: string
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    counter: null,
    firstName: 'Stefano',
  }

  render() {
    return (
      <div>
        <h2 style={{ color: this.props.h2Color || 'blue' }}>
          Componente a classe in TS!
        </h2>
        <p>{this.props.textContent}</p>
        <p
          onClick={() =>
            this.setState({
              counter: 100,
            })
          }
        >
          Il valore di counter è: {this.state.counter}
        </p>
      </div>
    )
  }
}

export default ClassComponent
