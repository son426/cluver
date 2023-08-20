import { styled } from "styled-components";
import requestImg from "../data/request.png";
import TopBar from "../components/Topbar";
import NavBar from "../components/navbar";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background-image: url(${requestImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ButtonDiv = styled.div`
  position: absolute;
`;

function RequestPage() {
  return (
    <Wrapper>
      <TopBar content="음악 요청" />
      <Content></Content>
      <NavBar />
    </Wrapper>
  );
}

export default RequestPage;
