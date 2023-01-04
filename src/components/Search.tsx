import '../styles/Search.sass'

const Search = () => {
    return(
        <div className="search">
            <div className="search-container">
                <h2>Para qual estado você deseja ir?</h2>
                <input placeholder='Pesquisar'/>
                <button>BUSCAR</button>
            </div>
        </div>
    )
}

export default Search