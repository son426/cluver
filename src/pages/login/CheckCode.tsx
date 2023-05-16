import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import SimpleCard from "../../components/SimpleCard";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { createCheckCode } from "../../util/api";

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
  :hover {
    color: ${(props) => props.theme.accentColor};
    transition: all ease 0.3s;
    cursor: pointer;
  }
`;

interface IRouterState {
  state: {
    id: number;
    name: string;
    desc: string;
    isPrivate: boolean;
  };
}
function CheckCode() {
  const { state } = useLocation() as IRouterState;
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  const [code, setCode] = useState<string>("…");

  const getCode = async () => {
    const response = await createCheckCode(
      today.getMonth() + 1,
      today.getDate(),
      state.id
    );
    if (response.status === 201) {
      setCode(response.data?.checkCode);
      //recoil에 code 추가
    }
  };
  const onEndCheck = () => {
    //recoil에서 code 삭제
  };
  useEffect(() => {
    getCode();
  }, []);

  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Title>
            {year}-{month}-{day}
          </Title>
          <Title>출석 코드</Title>
          <CodeText>{code}</CodeText>
          <SimpleCard
            name={state.name}
            desc={state.desc}
            isPrivate={state.isPrivate}
            chosen={false}
          />
          <TextWrapper style={{ position: "absolute", bottom: "20px" }}>
            <Text onClick={onEndCheck}>출석 마감하기</Text>
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
