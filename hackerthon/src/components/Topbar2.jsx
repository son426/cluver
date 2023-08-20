import { styled } from "styled-components";
import leftImg from "../data/left.png";
import { useNavigate } from "react-router-dom";

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
function TopBar2({ content }) {
  const navigate = useNavigate();
  const 뒤로가기 = () => {
    navigate("/request");
  };
  return (
    <>
      <Wrapper>
        <Top>
          <div className="col1" onClick={뒤로가기}></div>
          <div className="col2">{content}</div>
        </Top>
      </Wrapper>
    </>
  );
}

export default TopBar2;
