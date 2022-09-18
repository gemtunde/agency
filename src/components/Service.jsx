import React from 'react';
import styled from 'styled-components';
import Spiderman from '../img/spiderman.png';
import Play from '../img/play.png';
import MiniCard from './MiniCard';

const Service = () => {
  return (
    <Container>
        <Left>
            <Image
                src={Spiderman}
                alt='boy'
            />
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Description>
                    At TopLine, our talented team of animators,
                     motion graphics artists, producers, directors and
                      editors have all been carefully selected and are all highly motivated by our bonus system to create award-worthy work for our clients. Interested in working with our brand animation team? Then challenge us with your video production brief – our managing director, 
                    Jamie, is waiting to hear from you.
                </Description>
                  <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                 </CardContainer>
                 <Button><Icon src={Play} />Stopped video at 01:03:33 </Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service;

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
margin-left: 60px;
width: 50%;
z-index: 5;
`;
const Image = styled.img`
  width: 80%;  
`;
const Right = styled.div`
width: 50%;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 45px;
    color: crimson;
`;
const Description = styled.p`
margin-top: 20px;
    color: grey;
    font-size: 20px;
`;
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    color: white;
    background-color: crimson;
    border: none;
    border-radius: 10px;
    width: 180px;
    margin-top: 20px;
    cursor: pointer;
`;
const Icon = styled.img`
  width: 20px;  
  margin-right: 5px;
`;