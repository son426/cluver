import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";

const Wrap = styled.div`
  width: 360px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`;

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1c1f2a;
`;

function Main() {
  return (
    <>
      <Wrap>
        <Bg>
          <Navbar></Navbar>
          <Bottombar></Bottombar>
        </Bg>
      </Wrap>
    </>
  );
}

export default Main;
