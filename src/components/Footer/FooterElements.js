import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 0 24px 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        height: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 15px;
    
      }
      @media screen and (max-width: 480px) {
        height: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 15px;
      }
`;

export const SocialMedia = styled.section`
    width: 130%;
`;

export const SocialMediaWrap = styled.div`
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    /* color: #fff;
    justify-content:center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: left;
    padding-top:50%;
    margin-bottom: 10px;
    font-weight: bold; */
    img{
        height: 40px;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    padding-top: 70px;
    padding-right:350px;
    justify-content:left;
`;

export const Title = styled.h3`
    margin-bottom: 30px;
    color: #fff;

`


export const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    color: #fff;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: left;
  grid-template-areas: ${(imgStart) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${(imgStart) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 70px 120px;
  grid-area: col2;
`;

export const Column2 = styled.div`
  padding: 20px 70px;
  grid-area: col1;
`;

