import { styled } from "styled-components";
import TopBar from "../components/Topbar";
import NavBar from "../components/navbar";
import mainImg from "../data/main.png";
import PlayBar from "../components/playbar";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 1300px;
  background-image: url(${mainImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 48px;
  margin-bottom: 48px;
`;

function MainPage() {
  return (
    <Wrapper>
      <TopBar content="홈" />
      <Content></Content>
      <NavBar />
    </Wrapper>
  );
}

export default MainPage;
