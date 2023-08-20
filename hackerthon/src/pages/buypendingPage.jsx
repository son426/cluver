import { styled } from "styled-components";
import TopBar2 from "../components/Topbar2";
import buytab2 from "../data/buytab2.png";
import buypending from "../data/buypending.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Top1 = styled.div`
  width: 100%;
  height: 50px;
  background-image: url(${buytab2});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  .button {
    width: 50%;
    height: 100%;
    cursor: pointer;
  }
`;
const Top2 = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(${buypending});
  background-size: contain;
  background-repeat: no-repeat;
`;

function BuyPendingPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopBar2 content="구매한 음악" />
      <Top1>
        <div className="button" onClick={() => navigate("/my")}></div>
        <div className="button" onClick={() => navigate("/buypending")}></div>
      </Top1>
      <Top2 />
      <NavBar />
    </Wrapper>
  );
}

export default BuyPendingPage;
