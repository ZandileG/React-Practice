import React, {useState} from "react";
import MoviesList from "../Components/MoviesList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar onSearch={setSearchQuery}/>
      <MoviesList searchQuery={searchQuery}/>
      <Footer />
    </div>
  );
}

export default Home;