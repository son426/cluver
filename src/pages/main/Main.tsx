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
  background-color: ${(props) => props.theme.bgColor};
`;

function Main() {
  return (
    <>
      <Wrap>
        <Bg>
          <Navbar></Navbar>
          <Bottombar
            first={false}
            second={false}
            third={false}
            fourth={false}
            fifth={true}
          />
        </Bg>
      </Wrap>
    </>
  );
}

export default Main;
