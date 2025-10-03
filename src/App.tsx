import "./App.css"
// import { Card } from './components/Card'
// import { TitlePagCards } from "./components/TituloDaPaginaCards"
// import { Tasks } from './components/Tasks'
import { DefaultProp } from "./components/ExampleDefaultProp"

function App() {
  return (
    <>
      {/* <Tasks /> */}
      {/* <TitlePagCards title={`Exercício de props com typeScript ${2025}`}/>
      <Card title='Titulo com prop' description='Exercicio de ficção com props!'/>
      <Card title="Segundo titulo" description='segundo card do exercicio de ficção' /> */}
      <DefaultProp description="Estudar React"/>
      <DefaultProp description="Estudar React"/>
    </>
  )
}

export default App
