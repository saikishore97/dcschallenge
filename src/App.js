import React, {useState,useEffect} from 'react';
import './App.css';
import Usercard from './components/Usercard/Usercard.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';



const  App= ()=> {


  const[fetchedData,setFetchedData]=useState([]);


  const fetchingfunc= async(num)=>{
    try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`);
      const resdata= await res.json();
      setFetchedData(resdata);
    }catch(e){
      console.log(e);
    }
  }

  useEffect( ()=>{
    
  fetchingfunc(4);
},[]);


  return (
    <div className="App">
      <Header/>
      <Usercard {...fetchedData} {...fetchedData.address}/>
      <Footer/>
    </div>
  );
}

export default App;
