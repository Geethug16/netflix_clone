import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {originals,ActionMovies,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './Url'
//import axios from "axios";
const dataList=[
  {
    title:"Netflix originals",
    genre:originals,
    size:""
  },
  {
    title:"Action Movies",
    genre:ActionMovies,
    size:true
  },
  {
    title:"Comedy Movies",
    genre:ComedyMovies,
    size:true
  },
  {
    title:"Horror Movies",
    genre:HorrorMovies,
    size:true
  },
  {
    title:"Romance Movies",
    genre:RomanceMovies,
    size:true
  },
  {
    title:"Documentaries",
    genre:Documentaries,
    size:true
  },
  
  
]
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <Rowpost title='Netflix originals' genre={originals} />
      <Rowpost title='Action Movie' isSmall genre={ActionMovies} />
      <Rowpost title='Comedy Movie' isSmall genre={ComedyMovies} />
      <Rowpost title='Horror Movie' isSmall genre={HorrorMovies} />
      <Rowpost title='Romance Movie' isSmall genre={RomanceMovies} />
      <Rowpost title='Documentaries' isSmall genre={Documentaries} /> */}
      {
        dataList.map((list)=>(
          <Rowpost title={list.title} isSmall={list.size} genre={list.genre} />
        ))
      }
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
