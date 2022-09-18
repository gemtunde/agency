import styled from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

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
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
 // background-color: red;
`;
const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: white;
`
