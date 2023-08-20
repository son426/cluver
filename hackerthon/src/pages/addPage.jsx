import { styled } from "styled-components";
import leftImg from "../data/left.png";
import { AiOutlineSearch } from "react-icons/ai";
import guideImg from "../data/guide.png";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/Topbar2";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Top = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  padding: 12px 0px;
  position: relative;
  .col1 {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    left: 16px;
    width: 32px;
    height: 32px;
    font-weight: 600;
    background-image: url(${leftImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
  }
  .col2 {
    font-size: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
  }
`;
const Middle = styled.div`
  width: 100%;
  padding: 24px;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const InputDiv = styled.div`
  width: 100%;
  height: 84px;
  .row1 {
    display: flex;
    height: 20px;
    margin-bottom: 8px;
    align-items: center;
    gap: 8px;
    .col1 {
      font-size: 14px;
      height: 100%;
    }
    .col2 {
      font-size: 12px;
      height: 100%;
      color: #7b7b7b;
      padding: 3px 6px;
      background-color: #eff3ff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .row2 {
    height: 56px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      border: 1px solid #d9d9d9;
      padding: 16px 18px;
    }
    .icon {
      position: absolute;
      color: #aaaaaa;
      font-weight: 600;
      font-size: 20px;
      top: 50%;
      right: 16px;
      transform: translate(0, -50%);
    }
  }
`;
const GuideDiv = styled.div`
  width: 100%;
  height: 82px;
  background-image: url(${guideImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 104px;
  display: flex;
  gap: 8px;

  justify-content: center;
  .button1 {
    width: 159.5px;
    height: 56px;
    border-radius: 12px;
    border: none;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
  }
  .button2 {
    width: 159.5px;
    height: 56px;
    border-radius: 12px;
    border: none;
    background-color: #0038ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
`;

function AddPage() {
  const navigate = useNavigate();

  const 뒤로가기 = () => {
    navigate("/request");
  };
  const 직접만들기 = () => {
    navigate("/");
  };
  const 추가하기 = () => {
    navigate("/addcomplete");
  };

  return (
    <Wrapper>
      <TopBar2 content="새 음악 추가하기" />
      <Middle>
        <InputDiv>
          <div className="row1">
            <div className="col1">가수명</div>
            <div className="col2">커버 가수</div>
          </div>
          <div className="row2">
            <input type="text" placeholder="가수를 검색해주세요" />
            <AiOutlineSearch className="icon" />
          </div>
        </InputDiv>
        <InputDiv>
          <div className="row1">
            <div className="col1">음악명</div>
            <div className="col2">커버 원곡</div>
          </div>
          <div className="row2">
            <input type="text" placeholder="가수를 검색해주세요" />
            <AiOutlineSearch className="icon" />
          </div>
        </InputDiv>
        <GuideDiv></GuideDiv>
      </Middle>
      <Bottom>
        <div className="button1" onClick={직접만들기}>
          직접 만들기
        </div>
        <div className="button2" onClick={추가하기}>
          추가하기
        </div>
      </Bottom>
    </Wrapper>
  );
}

export default AddPage;
