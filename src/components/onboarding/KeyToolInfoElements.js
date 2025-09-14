import styled from "styled-components";


export const ProductsH4 = styled.h1`
  font-size: 2.3rem;
  color: #000;
  text-shadow: 5px 5px 8px #1aa3ff;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 150px;
padding-top: 140px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const KeyToolWrapper = styled.div`
display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: ${(imgStart) =>
    imgStart ? `'col1 col2'` : `'col2 col1'`};
  
  @media screen and (max-width: 1200px) {

    grid-template-columns: 1fr 1fr;

  }
  @media screen and (max-width: 768px) {

    grid-template-columns: 1fr;

    padding: 0 20px;

  }

`;

export const KeyToolContainer = styled.div`
  display: grid;
  z-index: 1;
 
  justify-content: center;
  padding: 0 0 100px 20x;
  background: #010606;
  height: 200%;
  
  @media screen and (max-width: 768px) {
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: block;

  }
  @media screen and (max-width: 480px) {
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: block;
    
  }
`;
export const Column1 = styled.div`
  margin-bottom: 0;
  padding: 20px 10px;
  grid-area: col1;
  width: 160%;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 250px 0 0;
  
  grid-area: col2;
`;
export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
  
`;

export const Img = styled.img`
  width: 170%;
  margin: 0 0 50px 0;
  padding-right: 400;
`;
