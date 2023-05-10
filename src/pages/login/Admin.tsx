import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useState } from "react";
import Card from "../../components/Card";

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
  transform: translateY(12%);
  //background-color: red;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  //gradient input box
  width: 100%;
  margin-bottom: 7px;
  border: 1px solid transparent;
  border-radius: 7px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.gradient};
`;
const Input = styled.input`
  width: 100%;
  padding: 6px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme.formColor};
  text-align: center;
  ::placeholder {
    color: ${(props) => props.theme.formColor};
    font-size: 12px;
    text-align: center;
  }
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 6px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 7px;
  border-color: transparent;
  background: ${(props) => props.theme.gradient};
`;
const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & {
    color: ${(props) => props.theme.iconColor};
    font-size: 10px;
  }
`;
const Text = styled.div`
  :hover {
    color: ${(props) => props.theme.accentColor};
    transition: all ease 0.3s;
  }
`;

function Login() {
  //예시 데이터
  const data = { name: "손채환", list: ["Homebrew", "aloha"] };
  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <span>${data.name}</span>
          <span>님이 관리 중인 동아리입니다.</span>
          {data.list.map((club) => (
            <Card></Card>
          ))}
          <TextWrapper>
            <Text onClick={() => alert("아이디 찾기")}>아이디 찾기</Text>
            <span>|</span>
            <Text onClick={() => alert("비밀번호 초기화")}>
              비밀번호 초기화
            </Text>
          </TextWrapper>
          <span>관리 중인 동아리 추가하기 +</span>
          <Text>동아리 삭제하기</Text>
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

export default Login;
