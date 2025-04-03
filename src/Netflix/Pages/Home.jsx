import React, {useState} from "react";
import MoviesList from "../Components/MoviesList";
import Navbar from "../Components/Navbar";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar onSearch={setSearchQuery}/>
      <MoviesList searchQuery={searchQuery}/>
    </div>
  );
}

export default Home;