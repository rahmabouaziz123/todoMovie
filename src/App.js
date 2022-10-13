import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { MovieList } from "./Components/MovieList";
import { AddNiewMovie } from "./Components/AddNiewMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pp.scss";
import { Search } from "./Components/Search";
import { useState } from "react";
function App() {
  const tabMovie = useSelector((state) => state);

  //  console.log(tabMovie)

  const [data, setData] = useState(tabMovie);
  // state search
  const [searching, setSearching] = useState("");
  const [rating, setRating] = useState(1);
  //editsearch
  const handelSeartch = (y) => setSearching(y);
  //
  const handelRating = (z) => setRating(z);

  return (
    <div className="App">
      <Search
        searching={searching}
        rating={rating}
        handelRating={handelRating}
        handelSeartch={handelSeartch}
      />

      <MovieList
        tabMovie={tabMovie.filter(
          (el) =>
            el.name.toLowerCase().includes(searching.toLowerCase()) &&
            el.rating >= rating
        )}
      />

      <AddNiewMovie />
    </div>
  );
}

export default App;
