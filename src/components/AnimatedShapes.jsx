import React from 'react';
import styled from 'styled-components';

const AnimatedShapes = () => {
  return (
    <>
    <Square />
    <Circle />
    <Rectangle />
    
    </>
  )
}

export default AnimatedShapes;

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: blue;
    opacity: 0.5;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: 1;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to{
            transform: translate(100vw, 100vh);
        }
    }`;

const Circle = styled.div`
   width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: pink;
    opacity: 0.8;
    position: absolute;
    top: 200px;
    left: -100px;
    z-index: 1;
    animation: circle 25s linear alternate infinite;

    @keyframes circle {
        to{
            transform: translate(100vw, -100vh);
        }
    }`;

const Rectangle = styled.div`
    width: 100px;
    height: 50px;
    background-color: orange;
    opacity: 0.5;
    position: absolute;
    top: 400px;
    left: -50px;
    z-index: 1;
    animation: rectangle 25s linear alternate infinite;

    @keyframes rectangle {
        to{
            transform: translate(100vw, -50vh);
        }
    }
`;