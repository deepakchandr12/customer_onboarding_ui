
import ReactPlayer from 'react-player';
import Video from "../../assets/hero.mp4";

import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  

} from "./HeroElements";

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <ReactPlayer

          url={Video}
          playing
          loop
          muted
          width={1600}
          height={900}

        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Digital Financial Sevices</HeroH1>
        <HeroP>
          <br />
          Providing you with world-class service 
          to help you get closer to your dreams.
        </HeroP>
        
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
