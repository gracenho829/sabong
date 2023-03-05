
import React from "react";
import tv from '../resources/tv.png';
import logo from '../resources/sabongLogo.png';
import '../css/videos.css';
const Videos = () => {


  return (
    <div className = "body">
      <div className = "column left">
      <img src={logo} className = "logo" alt = "logo"></img><br></br>
      <a href="https://www.youtube.com/embed/-OPhgNk2A5Y?controls=0&amp;" target = "videoFrame" className = "songLink" >이마트송</a> <br></br>
      <a href="https://www.youtube.com/embed/4XKo7u_ebW8?controls=0&amp;" target = "videoFrame" className = "songLink">HOME</a> <br></br>
      <a href="https://www.youtube.com/embed/K8dqs-SyW2M?controls=0&amp;" target = "videoFrame" className = "songLink">바라봐줘요</a> <br></br>
      <a href="https://www.youtube.com/embed/js1UBxXK8Jg?controls=0&amp;" target = "videoFrame" className = "songLink">It Runs Through Me + OHIO</a> <br></br>
      <a href="https://www.youtube.com/embed/jZ6Sz9TN-74?controls=0&amp;" target = "videoFrame" className = "songLink">주의 친절한 팔에 안기세</a> <br></br>
      <a href="https://www.youtube.com/embed/BeElbuKaO7Q?controls=0&amp;" target = "videoFrame" className = "songLink">REST + POPO</a> <br></br>
      <a href="https://www.youtube.com/embed/1WbkBSP0ioY?controls=0&amp;" target = "videoFrame" className = "songLink">Daughter of the Sun & She Said</a> <br></br>
      <a href="https://www.youtube.com/embed/nPgKjXSEvao?controls=0&amp;" target = "videoFrame" className = "songLink">Ondo</a> <br></br>
      </div>
     <div className ="column right">
     <img src={tv} className="tv" alt="tv"></img>
     <iframe name= "videoFrame" title = "videoFrame" id = "videoFrame" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
            src="https://www.youtube.com/embed/-OPhgNk2A5Y?controls=0&amp;">
          </iframe>
     </div>
    </div>
  );
};


export default Videos;