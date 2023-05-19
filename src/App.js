import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {originals,ActionMovies,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './Url'
//import axios from "axios";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title='Netflix originals' genre={originals} />
      <Rowpost title='Action Movie' isSmall genre={ActionMovies} />
      <Rowpost title='Comedy Movie' isSmall genre={ComedyMovies} />
      <Rowpost title='Horror Movie' isSmall genre={HorrorMovies} />
      <Rowpost title='Romance Movie' isSmall genre={RomanceMovies} />
      <Rowpost title='Documentaries' isSmall genre={Documentaries} />
      {/* <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          (response) => {
            console.log(response.data);
          })
       }}>Click Me</button> */}
      
    </div>
  );
}

export default App;
