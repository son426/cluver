import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin-bottom: 7px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.gradient};
`;
const Bg = styled.div`
  width: 100%;
  padding: 15px;
`;
const Title = styled.span`
  font-size: 15px;
  font-family: ${(props) => props.theme.textFont};
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const Desc = styled.span`
  font-size: 15px;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
`;
const TextWrapper = styled.div`
  width: 80%;
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

function Card() {
  return (
    <Container>
      <Bg>
        <Title>HOMEBREW</Title>
        <Desc>개발 동아리</Desc>
        <TextWrapper>
          <Text>오늘의 출석 코드 생성하기</Text>
          <span>|</span>
          <Text>동아리 설정 변경하기</Text>
        </TextWrapper>
      </Bg>
    </Container>
  );
}
export default Card;
