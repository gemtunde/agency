import React from 'react';
import styled from 'styled-components';
import Batman from '../img/batman.png';
import AnimatedShapes from './AnimatedShapes';


const Intro = () => {
  return (
    <Container>
     <Left>
        <Title>Adventures in animations</Title>
        <Description>
            A quality brand animation will elevate your brand,
             explain your products and services and give the public 
            an idea of what they can expect from your company. 
        </Description>
        <Info>
            <Button>Start a Project</Button>
            <Contact>
                <Phone>Call us @ 234 (0)90 123 456</Phone>
                <ContactText>For any question, contact us </ContactText>
            </Contact>
        </Info>
     </Left>
     <Right>
        <Image 
            src={Batman}
            alt='batman'
         />
     </Right>
     <AnimatedShapes />
    </Container>
  )
}

export default Intro;

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    background-color: crimson;
    padding: 20px;
`;
const Left =styled.div`
width: 60%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center; 
`;
const Title = styled.h1`
width: 60%;
 font-size: 60px;
 color:white;
`;
const Description = styled.p`
    font-size: 20px;
    color: white;
    width: 60%;
    margin-top: 20px;
`;

const Info = styled.div`
margin-top: 20px;
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Button = styled.button`
 padding: 15px;
 border-radius: 10px;
 background-color: black;
 color: white;
 border: none;
 font-weight: bold;
 letter-spacing: 2px;
 cursor: pointer;
`;
const Contact = styled.div`
display: flex;
flex-direction: column;
`;
const Phone = styled.span`
font-weight: bold;
color: grey;
`;
const ContactText = styled.span`
margin-top: 5px;
color: white;
`;

const Right =styled.div`
width: 40%;
 z-index: 5;
`;
const Image = styled.img`
    width: 100%;
   
`