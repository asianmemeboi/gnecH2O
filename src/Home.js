import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import React, { useEffect } from 'react';
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";
// import ScrollContainer from "./components/ScrollContainer";
// import ParallaxElement from "./components/ParallaxElement"; 
import LocomotiveScroll from 'locomotive-scroll';

class HomeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      image: props.image,
      imageMargin: props.imageMargin,
      marginTop: 100
    };
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div data-scroll data-scroll-speed="5"
      className="homescreenbox"
      id="scrollingdiv"
      style={{ marginLeft: this.state.imageMargin,
              height: "200px",
              marginTop: this.state.marginTop.toString() + "px",
              zIndex: "100"}}
    >
        <img src={this.state.image} alt={this.state.name} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">{this.state.name}</h2>
      </div>
    );
  }
}

function updateBoxes(newHeight) {
  let elements = document.getElementsByClassName("homescreenbox");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.height = newHeight.toString() + "px";
  }
}

function App() {
  const scrollRef = React.createRef();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    scroll.on('scroll', (instance) => {
      updateBoxes(Math.min(Math.max(200, instance.scroll.y - 150), 500));
      console.log(instance.scroll.y);
  })
  });

  return (
    <div ref={scrollRef}>
      <div data-scroll-section>
        <div data-scroll data-scroll-speed="1"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        ></div>

        <div data-scroll data-scroll-speed="1"
          style={{
            backgroundColor: "darkblue",
            marginTop: "-400px",
            marginLeft: "100px",
            width: "500px",
            height: "390px",
            borderRadius: "60px 60px 0px 0px",
            paddingTop: "70px",
            paddingLeft: "50px",
          }}
        >
          <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#e3f2fd" }}>
            GNEC <br /> H2O
          </h1>
        </div>

        <div data-scroll data-scroll-speed="1"
          style={{
            backgroundImage: "linear-gradient(darkblue, aqua)",
            height: "298px",
            marginTop: "-35px",
          }}
        ></div>
      
        <HomeBox name="Free-to-use" image={free} imageMargin="140px" />
        <HomeBox name="Trustworthy" image={trust} imageMargin="540px" />
        <HomeBox name="User-friendly" image={user} imageMargin="940px" />
        <HomeBox name="Accurate" image={accurate} imageMargin="1340px" />

        <div data-scroll data-scroll-speed="1" style={{ marginTop: "-68px", backgroundColor: "aqua", height: "1000px", zIndex: "-100" }}></div>
      </div>
    </div>
  );
}

export default App;
