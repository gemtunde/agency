import React from 'react';
import styled from 'styled-components';
import Superman from '../img/superman.png'
import AnimatedShapes from './AnimatedShapes';


const Feature = () => {
  return (
    <Container>
        <Left>
            <Image 
                src={Superman}
                alt='superman'
                />
        </Left>
        <Right>
            <Title>
               <b>good</b> thinking <br />
                <b>excellent</b> animations
            </Title>
            <SubTitle>we know what good animations means for your business</SubTitle>
            <Description>
                With your help, we’ll get to the heart of what makes your customers tick
                 and then we’ll make your brief the subject of one 
                 of our weekly collaborative brainstorms. 
                 This process enables us to generate a broad range
                  of ideas and concepts – from the screwball to the
                   sensible – that we can present to you for feedback. Once the concept is decided, 
                   our artists will get to work crafting an unforgettable animation.
            </Description>
            <Description>
                At TopLine, our talented team of animators, 
                motion graphics artists, producers, directors and 
                editors have all been carefully selected and are all highly motivated by our bonus system to create award-worthy work for our clients. 
                Interested in working with our brand animation team? Then challenge us with your video production brief – our managing director, Jamie, 
                is waiting to hear from you.
            </Description>
            <Button>Learn more</Button>
        </Right>
        <AnimatedShapes />
        </Container>
  )
}

export default Feature;

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
width: 50%;
z-index: 5;
`;
const Image = styled.img`
  width: 80%;  
`;
const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
z-index: 5;
`;
const Title = styled.span`
font-size: 70px;
color: crimson;
`;
const SubTitle = styled.span`
font-size: 24px;
color: grey;
font-style: italic;
margin-top: 20px;
`;
const Description = styled.p`
color: grey;
margin-top: 10px;
font-size: 17px;
`;
const Button = styled.button`
padding: 20px;
width: 150px;
border: none;
border-radius: 20px;
cursor: pointer;
margin-top: 10px;
background-color: crimson;
color: white;

`;
