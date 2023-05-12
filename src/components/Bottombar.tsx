import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95px;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  //background-color: grey;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.textFont};
`;

const IconDiv = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
  top: 3px;
  //background-color: rgba(50, 50, 50, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 0 15px;
`;

const Icon = styled.span<{ isActive: boolean }>`
  height: 45px;
  color: white;
  font-size: 30px;
  width: 45px;
  background: ${(props) =>
    props.isActive ? props.theme.gradient : props.theme.bgColor};
  border-radius: 7px;
  text-align: center;
  font-family: ${(props) => props.theme.titleFont};
`;

const TextDiv = styled.div`
  width: 100%;
  height: 15px;
  position: absolute;
  bottom: 28px;
  //background-color: green;
  display: flex;
  justify-content: space-evenly;
  padding: 0 15px;
`;

const Text = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 100;
  width: 45px;
  //background-color: blue;
  text-align: center;
`;

interface IBarProps {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
}
function Bottombar({ first, second, third, fourth, fifth }: IBarProps) {
  return (
    <>
      <Container>
        <IconDiv>
          <Icon isActive={first}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "32px",
                lineHeight: "140%",
                paddingLeft: "2px",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              how_to_reg
            </span>
          </Icon>
          <Icon isActive={second}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "32px",
                lineHeight: "140%",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              schedule
            </span>
          </Icon>
          <Icon isActive={third}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "32px",
                lineHeight: "138%",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              groups
            </span>
          </Icon>
          <Icon isActive={fourth}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "32px",
                lineHeight: "140%",
                fontVariationSettings: "'FILL' 1",
              }}
            >
              manage_accounts
            </span>
          </Icon>
          <Icon
            isActive={fifth}
            style={{
              fontSize: "28px",
              lineHeight: "152%",
              transform: "scaleY(-1)",
            }}
          >
            ♣
          </Icon>
        </IconDiv>
        <TextDiv>
          <Text>출석체크</Text>
          <Text>웬투밋</Text>
          <Text>그룹관리</Text>
          <Text>관리자</Text>
          <Text>홈으로</Text>
        </TextDiv>
      </Container>
    </>
  );
}

export default Bottombar;
