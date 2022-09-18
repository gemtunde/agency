import React from 'react';
import styled from 'styled-components';
import Spiderman from '../img/spiderman.png'

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
`