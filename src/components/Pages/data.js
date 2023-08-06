import React, { useEffect, useLayoutEffect, Component, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Datad = () => {
  const {id} = useParams();
  const Longi  = React.useRef(null);
  const Lati  = React.useRef(null);
  const [wdata, setwdata]  = useState({})

  
 
  

useEffect(() => {
  getcoord(); 
    
}, [id]);
useEffect(() => {
 console.log(wdata) 
    
}, [wdata]);




const getcoord =() =>{
  axios
  .get(`http://api.openweathermap.org/geo/1.0/direct?q=${id}&appid=42608b74b17b1d96b62e02384fe14aff`)
  .then((res) => {
    Longi.current = res.data[0].lon;
    Lati.current = res.data[0].lat;
    console.log(Longi.current);
    getdata(); 
    
  })
  .catch((err) => console.error(err));
};

const getdata =() =>{
  axios
  .get(`http://api.openweathermap.org/data/2.5/weather?lat=${Lati.current}&lon=${Longi.current}&appid=42608b74b17b1d96b62e02384fe14aff`)
  .then((res) => {
    setwdata(res.data);
    
    
    
  })
  .catch((err) => console.error(err));
};







return(
  <>
          <h5>About the city</h5>
          <span>temp: {wdata && wdata.main && wdata.main.temp}||&nbsp;</span>
          <span>max temp: {wdata && wdata.main && wdata.main.temp_max}||&nbsp;</span>
          <span>min temp: {wdata && wdata.main && wdata.main.temp_min}||&nbsp;</span>
          <span>pressure: {wdata && wdata.main && wdata.main.pressure}||&nbsp;</span>
          <span>humidity: {wdata && wdata.main && wdata.main.humidity}||&nbsp;</span>
          <span>visibility: {wdata.visibility}</span>

     
     </>
)

}
