import React from 'react';
import styled from 'styled-components';
import Superman from '../img/superman.png'


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

        </Right>
        </Container>
  )
}

export default Feature;

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
width: 50%;
`;
const Image = styled.img`
  width: 80%;  
`;
const Right = styled.div`
width: 50%;
`;
