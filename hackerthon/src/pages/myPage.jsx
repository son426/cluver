import { styled } from "styled-components";
import TopBar2 from "../components/Topbar2";
import buytab1 from "../data/buytab1.png";
import buylist from "../data/buylist.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import { sampledata_buylist, sampledata_buylist2 } from "../data/data.ts";
import { BsFillPlayFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import PlayBar from "../components/playbar";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Content = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: 150px;
`;
const Top1 = styled.div`
  width: 100%;
  height: 50px;
  background-image: url(${buytab1});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  .button {
    width: 50%;
    height: 100%;
    cursor: pointer;
  }
`;
const Middle = styled.div`
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  padding: 8px 18px;
  display: flex;
  align-items: center;
  .album {
    width: 50px;
    height: 50px;
    img {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      width: 100%;
      height: 100%;
    }
  }
  .meta {
    width: 207px;
    height: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    font-weight: 400;
    padding-left: 10px;
    margin-right: 28px;
    .title {
      color: #373737;
    }
    .singer {
      color: #7b7b7b;
      font-weight: 400;
    }
  }
  .icons {
    width: 50px;
    height: 24px;
    display: flex;
    gap: 8px;
    font-size: 20px;
    .icon1 {
      cursor: pointer;
    }
    .icon2 {
      display: flex;
      align-items: center;
      color: #7b7b7b;
      font-weight: 200;
      padding-top: 2px;
      font-size: 18px;
    }
  }
`;

const DateDiv = styled.div`
  width: 100%;
  height: 24px;
  font-size: 14px;
  color: #7b7b7b;
  padding-left: 20px;
  margin-top: 10px;
  font-weight: 600;
`;

function MyPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopBar2 content="구매한 음악" />
      <Content>
        <Top1>
          <div className="button" onClick={() => navigate("/my")}></div>
          <div className="button" onClick={() => navigate("/buypending")}></div>
        </Top1>
        <DateDiv>2023.08</DateDiv>
        <Middle>
          {sampledata_buylist.map((data, index) => (
            <Row key={index}>
              <div className="album">
                <img src={data.coverImg} />
              </div>
              <div className="meta">
                <div className="title">{data.title}</div>
                <div className="singer">{data.coverSinger}</div>
              </div>
              <div className="icons">
                <BsFillPlayFill className="icon1" />
                <FaEllipsisV className="icon2" />
              </div>
            </Row>
          ))}
        </Middle>
        <DateDiv>2023.06</DateDiv>
        <Middle>
          {sampledata_buylist2.map((data, index) => (
            <Row key={index}>
              <div className="album">
                <img src={data.coverImg} />
              </div>
              <div className="meta">
                <div className="title">{data.title}</div>
                <div className="singer">{data.coverSinger}</div>
              </div>
              <div className="icons">
                <BsFillPlayFill className="icon1" />
                <FaEllipsisV className="icon2" />
              </div>
            </Row>
          ))}
        </Middle>
      </Content>
      <PlayBar />
      <NavBar />
    </Wrapper>
  );
}

export default MyPage;
