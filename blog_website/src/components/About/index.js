import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import "./about.css";
import { Image } from "react-bootstrap";

const items = ["Expand", "your reading", "Expand", "your mind."];
const config = { mass: 5, tension: 2000, friction: 200 };

const About = () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 70 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <React.Fragment>
      <section className="aboutUs">
        <h1>About</h1>
        <div className="aboutContent">
          <div className="trails-main" onClick={() => set((state) => !state)}>
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={items[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                  }}
                >
                  <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
              ))}
            </div>
          </div>
          <div className="divAboutImage">
            <Image className="aboutImage" src="aboutUs.jpg" rounded />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
