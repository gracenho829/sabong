import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slick-theme.css"; 
import "../css/slick.css";
//import member images
import sarang from "../resources/members/sarang.png"
import baeggyu from "../resources/members/baeggyu.png"
import hankyul from "../resources/members/hankyul.png"
import hyunjin from "../resources/members/hyunjin.png"
import junbeom from "../resources/members/junbeom.png"
import junseok from "../resources/members/junseok.png"
import sechan from "../resources/members/ssibal.png"
import pin from "../resources/pin.png"
//import member labels
import sarangLabel from "../resources/members/sarangLabel.png";
import baeggyuLabel from "../resources/members/baeggyuLabel.png"
import hankyulLabel from "../resources/members/hankyulLabel.png"
import hyunjinLabel from "../resources/members/hyunjinLabel.png"
import junbeomLabel from "../resources/members/junbeomLabel.png"
import junseokLabel from "../resources/members/junseokLabel.png"
import sechanLabel from "../resources/members/sechanLabel.png"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    const singleSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          <div className="memberImage">
            <img src={sarang} alt="sarang"></img>
          </div>
          <div className="memberImage">
          <img src={baeggyu} alt="baeggyu"></img>
          </div>
          <div className="memberImage">
          <img src={hankyul} alt="hankyul"></img>
          </div>
          <div className="memberImage">
          <img src={hyunjin} alt="hyunjin"></img>
          </div>
          <div className="memberImage">
          <img src={junbeom} alt="junbeom"></img>
          </div>
          <div className="memberImage">
          <img src={sechan} alt="sechan"></img>
          </div>
          <div className="memberImage">
          <img src={junseok} alt="junseok"></img>
          </div>
        </Slider>
        <img src={pin} style={{width:"20vw", marginTop: "2rem"}}alt="pin"/>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          {...singleSettings}
        >
          <div className = "memberInformation">
            <div style={{margin: "auto", width: "60%"}}>
              <img src={sarang} alt="sarang" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <img src={sarangLabel} alt="saranglabel" className="memberLabel" style={{width:"70%"}}/>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              안녕하시렵니까. 오사랑입니다.<br></br>
              제가 여기서 제일 젊고여. 노래는 듣는 걸 더 좋아합니다.<br></br>
              제일 못하는 건 노래할 때 관객 분들과 눈 마주치기,<br></br>
              노래 사이사이마다 멘트 채우기입니다. 넘 어려버요.<br></br>
              (정적)<br></br>
              자기소개 끝인데 이제 집 가두 되나여.<br></br>
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
              <img src={baeggyu} alt="baeggyu" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <img src={baeggyuLabel} alt="baeggyulabel" className="memberLabel" style={{width:"70%"}}/>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              사봉에서 88개의 음을 소유한 뺘노 김백규입니다. <br></br>
              88개 중에 제가 쓰는 음은 단 18개도 안되지만, <br/>
              18개의 음들을 잘 조합하여 국밥과 같은 <br/>
              진국의 요리를 선사하겠습니다. <br/>
              그나저나 오늘 저랑 같이 국밥 한 그릇 하실래요?
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
              <img src={hankyul} alt="hankyul" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block", marginTop: "2rem"}}>
              <h3 style={{float:"left"}}>Hankyul Lee</h3><p>Electric Guitar</p>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              일렉기타 치는 이한결이라고 합니다. <br/>
              그렇게 안생겼지만 시끄러운 음악 안좋아하고 <br/>
              조용하고 미간 찌푸려지는 음악 좋아합니다. <br/>
              SABONG에서 같이 미간 찌푸리고 가시죠 여러분
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
              <img src={hyunjin} alt="hyunjin" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <h3 style={{float:"left"}}>Hyunjin Kim</h3><p>Drums</p>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              안녕하세요, 사봉의 규칙준수를 감찰하는 '법대생' 입니다. <br></br>
              음악은 자유로움이라고 생각하시는 분들도 계시지만, <br></br>
              저는 생각이 다릅니다! <br></br>
              음악이 좋은 이유와 좋지 않은 이유는 대부분 명확합니다. <br></br>
              앞으로도 고지식하게 SABONG에서 음악 들려드리겠습니다.<br></br>
              감사합니다. <br></br><br></br>
              김현진 드림
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
              <img src={junbeom} alt="junbeom" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <h3 style={{float:"left"}}>Junbeom Park</h3><p>Miscellaneous</p>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              사봉은 들으셨나요? <br></br>
              아뇨 전 한학기도 듣지 않았어요. <br></br>
              그렇다면 SABONG이 그 마음 공감해드릴게요. <br></br>
              모쪼록 잘 부탁드립니다. <br></br>
              악기가 될 만한건 다 동원해서 만족시켜드리는 봉사자가 되겠습니다. <br></br>
              반갑습니다 이것저것 다하는 박준범입니다.
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
              <img src={sechan} alt="sechan" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <h3 style={{float:"left"}}>Sechan Park</h3><p>Bass Guitar</p>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              안녕하세요 사봉의 그루브를 만드는 리트리버 박세찬입니다. <br/>
              저의 "개"같은 연주를 통해 긍정적인 에너지를 얻어가시면 좋겠습니다. <br/>
              혹시 제게 "왜 기타줄이 6개가 아니에요?" 라고 물으신다면 <br/>
              개물림 사고를 당하실 수 있으니 조심하세요★ 
              </p>
            </div>
          </div>
          <div className = "memberInformation">
          <div style={{margin: "auto", width: "65%"}}>
            <div className = "center">
              <img src={junseok} alt="junseok" style={{display:"inline-block", float:"left"}}></img>
              <div style={{display:"inline-block"}}>
              <h3 style={{float:"left"}}>Junseok Park</h3><p>Acoustic Guitar</p>
              </div>
              <p style={{lineHeight:"1.4rem"}}>
              사봉에서 감미롭고 리드미컬한 어쿠스틱 기타를 칩니다.<br></br>
              곡에서 있는 듯 없는 듯 치며 조화로움을 돕습니다. <br></br>
              또 다른 역할로선 사봉 밴드의 최연장자로서 <br></br>
              팀 내 기강과 질서를 바로잡는 역할을 도맡아서 하고 있습니다. 
              </p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}