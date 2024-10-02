import { useState} from "react";
import { useEffect} from "react";
import Input from "./components/input";
import Card from "./components/Card";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar";

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("candy");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "dc34792b";
  const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
       }, [query]);
  const submitHanlder = () => {
    setQuery(search);
    setSearch("");
  };

  return (
  
    <div className="App">

      <div >
       <CustomNavbar />
      </div>
      <div className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Batao Aj Kya Khana h"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="button" onClick={submitHanlder} className="search-button">
         search
        </button>
      </div>
      <div className="recipes">
        {recipes.map((item) => {
          return <Card recipe={item} />;
        })}
      </div>
    </div>
  );
};

export default App;