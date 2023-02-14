
import React from "react";
import tv from '../resources/tv.png';
import logo from '../resources/sabongLogo.png';
import '../css/videos.css';
const Videos = () => {


  return (
    <div className = "body">
      <div className = "column left">
      <img src={logo} className = "logo" alt = "logo"></img><br></br>
      <a className = "songLink" >이마트송</a> <br></br>
      <a href="url" className = "songLink">HOME</a> <br></br>
      <a href="url" className = "songLink">바라봐줘요</a> <br></br>
      <a href="url" className = "songLink">It Runs Through Me + OHIO</a> <br></br>
      <a href="url" className = "songLink">주의 친절한 팔에 안기세</a> <br></br>
      <a href="url" className = "songLink">REST + POPO</a> <br></br>
      <a href="url" className = "songLink">Daughter of the Sun</a> <br></br>
      <a href="url" className = "songLink">She Said</a> <br></br>
      <a href="url" className = "songLink">Ondo</a> <br></br>
      </div>
     <div className ="column right">
     <img src={tv} className="tv" alt="tv"></img>
     </div>
    </div>
  );
};


export default Videos;