import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SeriesList from "./pages/SeriesList"
import MovieList from "./pages/MovieList";

function App() {
  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/serieslist" element={<SeriesList />} />
       
        </Routes>
        < Navbar />
      </BrowserRouter>

      <div></div>
    </>
  );
}

export default App;
