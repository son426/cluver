import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import logo from "../../assets/images/logo.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
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
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 150px;
`;
const InputWrapper = styled.div`
  //gradient input box
  width: 60%;
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
`;
const Button = styled.button`
  width: 60%;
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
  }
`;

function Login() {
  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Logo src={logo} />
          <InputWrapper>
            <Input placeholder="아이디"></Input>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="비밀번호"></Input>
          </InputWrapper>
          <Button onClick={() => alert("로그인")}>로그인</Button>
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
