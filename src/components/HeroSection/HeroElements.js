import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 620px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`;

export const ReactPlayer = styled.div`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  
  background: #232a34;
  filter: brightness(70%);
 
  
`;
export const HeroContent = styled.div`
z-index: 3;
max-width: 550px;
position: absolute;
padding: 80px 0;
padding-top:120px;
display: flex;
flex-direction: column;

 
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 70px;
  font-family: 'Hanalei Fill', cursive;
  text-align: center;
padding-top:50px;
  @media screen and (max-width: 68px) {
    font-size: 20px;
  }

  @media screen and (max-width: 80px) {
    font-size: 20px;
  }

`;





export const HeroP = styled.p`
  color: #fff;
  font-size: 23px;
 
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

