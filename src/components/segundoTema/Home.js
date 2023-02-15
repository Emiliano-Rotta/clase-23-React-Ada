import { useNavigate  } from "react-router-dom"
import {useState} from "react"

const Home = () => {
  const navigate = useNavigate(); 
  const [valorInput, setValorDelInput] = useState("") 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(valorInput)
    
    navigate(`/redireccion/${valorInput}`) 
  }

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  )
}

export default Home
