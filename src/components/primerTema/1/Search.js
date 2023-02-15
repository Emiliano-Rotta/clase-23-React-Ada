import { useSearchParams } from "react-router-dom" 

const Search = () => {
  
  const [searchParams, setSearchParams] = useSearchParams({
    query: "", 
  })

 
  return (
    <div>
    <h1>Search</h1>
    <input 
      type="text" 

      />

    </div>
  )
}

export default Search
