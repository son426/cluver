import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  //background-color: ${(props) => props.theme.bgColor};
`;
const Wrap = styled.div`
  width: 360px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.bgColor};
`;
const Container = styled.div`
  width: 100%;
  height: 77%;
  transform: translateY(10%);
  //background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RowWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.span`
  font-size: 10px;
  font-weight: lighter;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
  margin-bottom: 5px;
`;
const WarningText = styled.span`
  font-size: 10px;
  font-weight: lighter;
  color: ${(props) => props.theme.accentColor};
  position: absolute;
  transform: translate(5px, 2px);
`;
const InputBox = styled.div`
  width: 60%;
  min-width: 150px;
  border: 1px solid white;
  border-radius: 6px;
  height: 30px;
  border-radius: 7px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.gradient};
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid white;
  border-radius: 7px;
  height: 30px;
  padding-bottom: 3px;
  color: white;
  font-family: ${(props) => props.theme.textFont};
  text-align: center;
  font-size: 13px;
  background-color: transparent;
  border: 1px solid transparent;
  ::placeholder {
    color: ${(props) => props.theme.formColor};
  }
  :focus {
    outline: none;
  }
`;
const Button = styled.div<{ isActive: boolean }>`
  width: 60%;
  border: 1px solid white;
  border-radius: 6px;
  height: 30px;
  margin-bottom: 5px;
  color: ${(props) =>
    props.isActive ? props.theme.bgColor : props.theme.iconColor};
  background: ${(props) =>
    props.isActive ? props.theme.iconColor : props.theme.bgColor};
  text-align: center;
  font-size: 13px;
  padding-top: 7px;
  font-family: ${(props) => props.theme.textFont};
  cursor: pointer;
`;

interface IRouterState {
  state: {
    id: number;
    name: string;
    desc: string;
    img: string;
    isPrivate: boolean;
  };
}

function EditClub() {
  const { state } = useLocation() as IRouterState;

  const [isPrivate, setIsPrivate] = useState(false);
  const toggle = () => {
    setIsPrivate((prev) => !prev);
  };
  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <InputBox>
            <WarningText>*</WarningText>
            <Input
              type="text"
              placeholder="동아리 이름"
              value={state.name}
              onChange={(e) => {}}
            />
          </InputBox>
          <InputBox style={{ minHeight: "50px" }}>
            <WarningText>*</WarningText>
            <Input
              as="textarea"
              maxLength={30}
              style={{ resize: "none" }}
              placeholder="동아리 소개"
              value={state.desc}
              onChange={(e) => {}}
            />
          </InputBox>
          <RowWrapper>
            <Button
              isActive={!isPrivate}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              onClick={toggle}
            >
              공개
            </Button>
            <Button
              isActive={isPrivate}
              style={{ marginLeft: "5px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              onClick={toggle}
            >
              비공개
            </Button>
          </RowWrapper>
          <Text>※ 비공개 설정 시 동아리 코드 입력 필요</Text>
          <InputBox>
            <Input type="text" placeholder="동아리 코드" onChange={(e) => {}} />
          </InputBox>
          <RowWrapper>
            <InputBox>
              <Input
                type="text"
                placeholder="동아리 프로필 사진"
                value={state.img}
                onChange={(e) => {}}
              />
            </InputBox>
            <Button
              isActive={true}
              style={{ marginLeft: "5px" }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              onClick={() => {}}
            >
              등록
            </Button>
          </RowWrapper>
          <Button
            isActive={true}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onClick={() => {}}
          >
            저장하기
          </Button>
        </Container>
        <Bottombar
          first={false}
          second={false}
          third={false}
          fourth={true}
          fifth={false}
        />
      </Wrap>
    </Background>
  );
}
export default EditClub;
