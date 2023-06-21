import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <main className="container">
        <Logo />
        <h1 className="title">Qual é a melhor opção?</h1>
        <Form />
      </main>
    </div>
  );
}

export default App;