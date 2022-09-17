import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
        <Navbar />
        <Intro />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
 // background-color: red;
`;
