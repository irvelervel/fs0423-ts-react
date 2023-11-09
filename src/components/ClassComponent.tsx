import { Component } from 'react'

interface ClassComponentProps {
  textContent: string
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h2>Componente a classe in TS!</h2>
        <p>{this.props.textContent}</p>
      </div>
    )
  }
}

export default ClassComponent
