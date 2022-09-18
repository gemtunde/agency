import styled, {css} from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Container>
          <Navbar />
          <Intro />
          <IntroShape />
      </Container>
      <Container>
          <Feature />
          <FeatureShape />
      </Container>
      <Container>
          <Service />
          <ServiceShape /> 
      </Container>
    </>
  );
}

export default App;

const Shape = css`
   width: 100%;
  height: 100%;
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
 // background-color: red;
`;
const IntroShape = styled.div`
  ${Shape}
  //  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: white;
`
const FeatureShape = styled.div`
  ${Shape}
  margin-top: -50px;
  clip-path: polygon(54% 0, 100% 0%, 100% 100%, 75% 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  margin-top: -50px;
  ${Shape}
  clip-path: polygon(0 0, 20% 0%, 20% 100%, 0 100%);
  background-color: pink;
`;
