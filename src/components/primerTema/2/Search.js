import { useSearchParams } from "react-router-dom" 

const Search = () => {

const [searchParams, setSearchParams] = useSearchParams({
  query: "" 
})

const handleChange = (e) => {
  setSearchParams({
    query: e.target.value
  })
}
console.log("search", searchParams )


return (
  <div>
  <h1>Search</h1>
  {/* <p>Nombre del personaje</p> */}
  <input 
    type="text" 
    onChange={handleChange}
    value={searchParams.get("query")}   
  />

  </div>
)
}

export default Search