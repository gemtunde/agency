import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Brand Agency</Logo>
                 <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                 </Menu>
            </Left>

            <Button>Join Now</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
const Container = styled.div`
    height: 50px;
    z-index: 10;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Menu = styled.ul`
    display: flex;
    list-style-type: none;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: normal;
    color: grey;
`;
const Button = styled.button`
  border: 2px solid white ;
  padding: 10px 15px;
  color: white;
  background-color: crimson;
  font-weight: bold;
  border-radius:10px;
  cursor: pointer;
`;