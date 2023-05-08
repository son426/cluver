import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1f2a;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
`;
const Title = styled.h1`
  // 타이틀 폰트 이슈
  font-size: 30px;
  font-weight: 600;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
  color: transparent;
  -webkit-background-clip: text;
`;
const Navbar = styled.div`
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 30px;
  align-items: center;
`;
const Container = styled.div`
  width: 55vw;
  height: 50vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Clover = styled.div`
  font-size: 90px;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
  color: transparent;
  -webkit-background-clip: text;
  //겹침 이슈
  /* position: absolute; */
`;
const WhiteTitle = styled.div`
  // 타이틀 폰트 이슈
  font-size: 30px;
  font-weight: 600;
  color: white;
  /* position: absolute; */
`;
const Input = styled.input`
  background-color: transparent;
  border: 1px solid #5b6579;
  border-radius: 7px;
  width: 100%;
  padding: 7px;
  margin-bottom: 7px;
`;
const Button = styled.button`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 7px;
  border-color: transparent;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
`;
const Text = styled.span`
  color: white;
  font-size: 10px;
`;

function Login() {
  return (
    <Background>
      <Header>
        <Title>♣</Title>
        <Title>CLUVER</Title>
        <FontAwesomeIcon
          // 아이콘 그라데이션 이슈
          icon={faBars}
          size="lg"
          style={{
            background: "linear-gradient(135deg, #91e09d 0%, #abc0e4 70%)",
            color: "transparent",
            backgroundClip: "text",
          }}
        />
      </Header>
      <Container>
        <Clover>♣</Clover>
        <WhiteTitle>CLUVER</WhiteTitle>
        <Text>FOR CLUB LEADER</Text>
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호"></Input>
        <Button>로그인</Button>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text>아이디 찾기</Text>
          <Text>|</Text>
          <Text>비밀번호 초기화</Text>
        </div>
      </Container>
      <Navbar>
        <FontAwesomeIcon icon={faUserCheck} size="xl" color="white" />
        <FontAwesomeIcon icon={faUsers} size="xl" color="white" />
        <Title style={{ color: "white", transform: "scaleY(-1)" }}>♣</Title>
      </Navbar>
    </Background>
  );
}

export default Login;
