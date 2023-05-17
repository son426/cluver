import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useRef, useState } from "react";

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
const Modal = styled.div`
  display: none; //flex
  width: 75%;
  border: 1px solid white;
  padding-top: 10px;
  padding-bottom: 5px;
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 90px;
  background: ${(props) => props.theme.bgColor};
`;
const Text = styled.span`
  font-size: 10px;
  font-weight: lighter;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
  margin-bottom: 5px;
`;
const EmailWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InputBox = styled.div`
  width: 70%;
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
  margin-bottom: 6px;
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
const Button = styled.div`
  width: 70%;
  border-radius: 6px;
  height: 30px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.bgColor};
  background: white;
  text-align: center;
  font-size: 13px;
  padding-top: 7px;
  font-family: ${(props) => props.theme.textFont};
  cursor: pointer;
`;

function Signup() {
  const dupRef = useRef<any>(null);
  const sendRef = useRef<any>(null);
  const btnRef = useRef<any>(null);

  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [pwCheck, setPwCheck] = useState<string>();

  const checkDuplicate = () => {};
  const onSendMail = () => {};
  const onSubmit = () => {
    if (id !== "" && name !== "" && pw !== "" && pw === pwCheck) {
      //api 요청
    }
  };

  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Modal>
            <Text>이메일 인증 전입니다.</Text>
            <Text>입력하신 이메일로 이동하여 인증을 완료해 주세요.</Text>
          </Modal>
          <EmailWrapper>
            <InputBox>
              <Input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </InputBox>
            <Button
              ref={dupRef}
              style={{ marginLeft: "5px" }}
              onClick={checkDuplicate}
            >
              중복 확인
            </Button>
          </EmailWrapper>
          <Text>* 발송하기 버튼을 누른 후 이메일 인증을 완료해 주세요.</Text>
          <Button ref={sendRef} onClick={onSendMail}>
            인증 메일 발송하기
          </Button>
          <InputBox>
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => {
                setId(e.currentTarget.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => {
                setPw(e.currentTarget.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheck}
              onChange={(e) => {
                setPwCheck(e.currentTarget.value);
              }}
            />
          </InputBox>
          <Button ref={btnRef} onClick={onSubmit}>
            회원가입
          </Button>
        </Container>
        <Bottombar
          first={false}
          second={false}
          third={false}
          fourth={false}
          fifth={false}
        />
      </Wrap>
    </Background>
  );
}
export default Signup;
