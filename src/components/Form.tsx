import { useState, FormEvent } from "react"

interface InfoProps {
  title: string,
  gasolina: string | number,
  alcool: string | number
}

export default function Form() {
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [info, setInfo] = useState<InfoProps>()

  function calculate(e: FormEvent) {
    e.preventDefault();

    const calc = (alcoolInput / gasolinaInput)

    if (calc <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: `Gasolina: R$ ${gasolinaInput}`,
        alcool: `Álcool: R$ ${alcoolInput}`
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: `Gasolina: R$ ${formatCurrency(gasolinaInput)}`,
        alcool: `Álcool: R$ ${formatCurrency(alcoolInput)}`
      })
    }
  }

  function formatCurrency(value: number) {
    const formatedValue = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })

    return formatedValue;
  }

  return (
    <>
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
     {info && Object.keys(info).length > 0 && (
      <section className="result">
          <h2 className="result-title">{info.title}</h2>
          <span>{info.alcool}</span>
          <span>{info.gasolina}</span>
      </section>
     )}
    </>
  )
}

