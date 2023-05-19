import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import SimpleCard from "../../components/SimpleCard";
import { useLocation, useNavigate } from "react-router";
import { endCheck } from "../../util/api";
import { useRef } from "react";

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
const Title = styled.span`
  font-size: 20px;
  font-weight: 400;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
  margin: 15px auto;
`;
const CodeText = styled.span`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 5px;
  font-family: ${(props) => props.theme.textFont};
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
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
  color: ${(props) => props.theme.iconColor};
  margin-bottom: 20px;
  font-size: 13px;
  font-family: ${(props) => props.theme.textFont};
  font-weight: lighter;
  :hover {
    color: ${(props) => props.theme.accentColor};
    transition: all ease 0.3s;
    cursor: pointer;
  }
`;
const ModalBg = styled.div`
  display: none; //flex
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  position: fixed;
  justify-content: center;
`;
const Modal = styled.div`
  width: 80%;
  border: 1px solid white;
  padding: 20px 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 40%;
  background: ${(props) => props.theme.bgColor};
  transition: all ease 0.3s;
`;
const SmallText = styled.div`
  :hover {
    color: ${(props) => props.theme.accentColor};
    transition: all ease 0.3s;
  }
`;

interface IRouterState {
  state: {
    id: number;
    name: string;
    desc: string;
    isPrivate: boolean;
    checkCode: string;
  };
}
function CheckCode() {
  const navigate = useNavigate();
  const modalRef = useRef<any>(null);
  const { state } = useLocation() as IRouterState;
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  const onEndCheck = async () => {
    const today = new Date();
    const response = await endCheck(
      today.getMonth() + 1,
      today.getDate(),
      state.id
    );
    if (response.status === 201) {
      const code = response.data.checkCode;
      navigate("/admin");
    } else {
      console.log(response);
    }
  };

  //뒤로가기 막기 / 뒤로가기 하면 자동 출석마감

  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <ModalBg ref={modalRef}>
            <Modal>
              <Text>출석을 마감하시겠습니까?</Text>
              <TextWrapper>
                <SmallText onClick={onEndCheck}>마감하기</SmallText>
                <span>|</span>
                <SmallText
                  onClick={() => {
                    modalRef.current.style.display = "none";
                  }}
                >
                  취소
                </SmallText>
              </TextWrapper>
            </Modal>
          </ModalBg>
          <Title>
            {year}-{month}-{day}
          </Title>
          <Title>출석 코드</Title>
          <CodeText>{state.checkCode}</CodeText>
          <SimpleCard
            name={state.name}
            desc={state.desc}
            isPrivate={state.isPrivate}
            chosen={false}
          />
          <TextWrapper style={{ marginTop: "10px" }}>
            <Text
              onClick={() => {
                window.location.href = `/attendance/${state.id}`;
              }}
            >
              출석 명단 확인
            </Text>
          </TextWrapper>
          <TextWrapper style={{ position: "absolute", bottom: "10px" }}>
            <Text
              onClick={() => {
                modalRef.current.style.display = "flex";
              }}
            >
              출석 마감하기
            </Text>
          </TextWrapper>
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
export default CheckCode;
