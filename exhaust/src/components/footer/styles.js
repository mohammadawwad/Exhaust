import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  margin-top: 100px;
  bottom: 900000;
  width: 97.2%;
  margin-left: -100px;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left 30%;
    max-width: 1000px;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(320px, 2fr));
  grid-gap: 20px;
   
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto auto, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;