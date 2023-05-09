import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

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
const Logo = styled.img`
  width: 150px;
  margin-top: 120px;
  margin-bottom: 5px;
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
const Form = styled.form`
  width: 60%;
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = (e: React.FormEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };
  const onChangePw = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Logo src={logo} />
          <Form onSubmit={onSubmit}>
            <InputWrapper>
              <Input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={onChangeId}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangePw}
              ></Input>
            </InputWrapper>
            <Button type="submit">로그인</Button>
          </Form>
          <TextWrapper>
            <Text onClick={() => alert("아이디 찾기")}>아이디 찾기</Text>
            <span>|</span>
            <Text onClick={() => alert("비밀번호 초기화")}>
              비밀번호 초기화
            </Text>
          </TextWrapper>
        </Container>
        <Bottombar></Bottombar>
      </Wrap>
    </Background>
  );
}

export default Login;
