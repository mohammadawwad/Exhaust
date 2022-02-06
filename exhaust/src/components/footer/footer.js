import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#12be54", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Exhuast: Shapping The Reality Around Us
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/aboutus">Visit Page</FooterLink>
            <FooterLink href="/contactus">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Impact</FooterLink>
            <FooterLink href="/">Activity</FooterLink>
            <FooterLink href="/">History</FooterLink>
            <FooterLink href="/stats">Statistics</FooterLink>
            <FooterLink href="/maps">Maps</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
