import { useState, FormEvent } from "react"

export default function Form() {
  const [alcoolInput, setAlcoolInput] = useState(1)
  const [gasolinaInput, setGasolinaInput] = useState(1)

  function calculate(e: FormEvent) {
    e.preventDefault();

    const calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      alert("Compensa usar Álcool")
    } else {
      alert("Compensa usar Gasolina")
    }
  }

  return (
    <form className="form" onSubmit={calculate}>
      <label>Álcool (preço por litro)</label>
      <input
        type="number"
        className="input"
        placeholder="3,90"
        min="1" step="0.01"
        required value={alcoolInput}
        onChange={(e) => setAlcoolInput(Number(e.target.value))}
      />

      <label>Gasolina (preço por litro)</label>
      <input
        type="number"
        className="input"
        placeholder="5,60"
        min="1"
        step="0.01"
        required
        value={gasolinaInput}
        onChange={(e) => setGasolinaInput(Number(e.target.value))}
      />
      <input type="submit" value="Calcular" className="button" />
    </form>
  )
}