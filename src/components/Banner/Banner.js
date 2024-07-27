import React from 'react';
import "./Banner.css";
import {useState,useEffect} from 'react';
import axios from '../../axiosConfig'
import{baseUrl,API_KEY,imageUrl} from '../../constants'

function Banner() {
  const[banner,setBanner]=useState()

  useEffect(()=>{
    let n=Math.floor(Math.random()*20);
    axios.get(`movie/popular?language=en-US&page=1&api_key=${API_KEY}`).then((response)=>{
      
     // console.log(response.data.results[0]);
      setBanner(response.data.results[n])

    }).catch((err)=>{console.log(err)})
  },[])
  return (
    <div 
    className='banner' style={{backgroundImage:`url(${banner?imageUrl+banner.backdrop_path:''})`}}>
       <div className='content' >
           <h1 className='title'>{banner? banner.title:''} </h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{banner?banner.overview:''}</h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  )
}

export default Banner;