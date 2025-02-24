
interface Props {
    setSearchTerm : (searchTerm : string) => void
    onSearch : () => void
}


const Search = ({onSearch, setSearchTerm} : Props) => {
  return (
    <div className="flex justify-center py-5">
        <div className='bg-stone-300 text-left px-5 rounded-full h-12 w-150 content-center shadow-md'>
          <span className = 'pr-2 font-semibold'> Search </span>
          <input placeholder="Enter your text here" className="w-97 focus:outline-none cursor-help" onInput={(newInput) => setSearchTerm(newInput.currentTarget.value)}></input>
          <button className="font-semibold text-stone-500 bg-stone-50 hover:bg-stone-200 rounded-lg shadow-lg w-25 h-8" onClick={(e) => onSearch()}> Search </button>
        </div>
    </div>
  )
}

export default Search
