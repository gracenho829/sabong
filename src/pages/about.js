import React from "react";
import logo from '../resources/sabongLogo.png';
import AsNavFor from "./asNavFor";
import '../css/about.css';

const About = () => {
  return (
    <div className = "body">
      <img src={logo} className="sabonglogo" alt="logo"></img>
      <div className = "bandIntro">
          <p>누구도 감히 따라올 수 없는 오사랑의 목소리를 <br></br>
          한동의 천연기념물로 보호하고자 봉사자들이 모였다. <br></br>
          그나마 악기라도 할 수 있는 아저씨들이 <br></br>
          감히 그녀의 목소리에 숟가락을 하나씩 얹기 시작하였다. <br></br>
          그렇게 모이게 된 우리.  <br></br>
          그렇다.우리는 사봉, 사랑이와 봉사자들이다. <br></br>
          국밥으로 도원결의를 다지고 치킨 한 마리에 꺄르르 웃는 참 순수한 사람들. <br></br>
          갈 곳 없는 불쌍한 늙은 양들이 밴드연습실을 경로당으로 만들고 지키고 있다. <br></br>
          그 누가 인정하지 않아도 우리는 사회봉사를 초과 수강하고 있는 중이다.</p>
          
          <br/><br></br>

          <s>(첫번째와 두번째 문장은 오사랑의 주관이 하나도 들어가지 않은 문장임을 오사랑 본인이 간곡히 밝힙니다.)</s>
      </div>
      <div className="vl" style={{height:"40vh" }}></div>
      <div className = "wrapperNav">
      <AsNavFor/>
      </div>
    </div>
  );
};
  
export default About;