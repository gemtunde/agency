import React from 'react'
import styled from 'styled-components';
import Search from '../img/search.png';

const MiniCard = () => {
  return (
    <Container>
        <Image 
            src={Search}
        />
        <Text>Brand Animation Production</Text>
    </Container>
  )
}

export default MiniCard;
const Container = styled.div`
    width: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center ;
`;