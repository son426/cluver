import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import SimpleCard from "../../components/SimpleCard";
import { useLocation } from "react-router";

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

interface IRouterState {
  state: {
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

  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Title>
            {year}-{month}-{day}
          </Title>
          <Title>출석 코드</Title>
          <CodeText>0505</CodeText> {/*랜덤생성*/}
          <SimpleCard
            name={state.name}
            desc={state.desc}
            isPrivate={state.isPrivate}
            chosen={false}
          />
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
