import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Search = () => {

const [personajes, setPersonajes] = useState([])


  const [searchParams, setSearchParams] = useSearchParams({
    query: "", 
    status: ""
  })

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${searchParams.get("query")}&status=${searchParams.get("status")}`)
    .then(res => res.json())
    .then(data => {
        setPersonajes(data.results)
    })
  }, [searchParams])

  const handleChange = (e) => {
    setSearchParams({
      
      query: e.target.value
    })
  }

  const handleChangeS = (e) => {
    setSearchParams({
      status: e.target.value
    })
  }


  
  return (
    <div>
    <h1>Search</h1>
    <p>Nombre del personaje</p>
    <input 
      type="text" 
      onChange={handleChange}
      value={searchParams.get("query")}  
      ></input>
      <p>Estado del personaje</p>
    <input 
      type="text" 
      onChange={handleChangeS}
      value={searchParams.get("status")}  
      ></input>

      {personajes.map(personaje => <div> <h1>{personaje.name}</h1> <h1>{personaje.status}</h1></div> )}
    </div>
  )
}

export default Search
