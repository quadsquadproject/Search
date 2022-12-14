import searchImages from "./api";
import SearchBar from "./components/SearchBar";

const handleSubmit = (term) => {
    console.log('submit',term);
}

function App(){
    return(
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    );
}

export default App;