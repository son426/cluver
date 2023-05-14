import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import SimpleCard from "../../components/SimpleCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
const UserName = styled.span`
  font-size: 15px;
  font-weight: 600;
  font-family: ${(props) => props.theme.textFont};
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 400;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
`;
const CheckBox = styled.span<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  border: 1px solid
    ${(props) => (props.isActive ? "transparent" : props.theme.iconColor)};
  background: ${(props) =>
    props.isActive ? props.theme.gradient : props.theme.bgColor};
  cursor: pointer;
`;
const CardContainer = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
const Modal = styled.div`
  opacity: 0;
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
const Text = styled.span`
  color: ${(props) => props.theme.iconColor};
  font-size: 13px;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  & {
    color: ${(props) => props.theme.iconColor};
    font-size: 10px;
  }
`;
const SmallText = styled.div`
  :hover {
    color: ${(props) => props.theme.accentColor};
    transition: all ease 0.3s;
  }
`;

function Delete() {
  const navigate = useNavigate();
  const modalRef = useRef<any>(null);
  const btnRef = useRef<any>(null);

  //예시 데이터
  const data = {
    name: "손채환",
    list: [
      { name: "Homebrew", desc: "개발 동아리", isPrivate: "false" },
      { name: "aloha", desc: "우주최강 알고리즘 동라리", isPrivate: "true" },
    ],
  };
  const [chosen, setChosen] = useState<boolean[]>([]);
  const onChoose = (i: number) => {
    setChosen((prev) => {
      let old = [...prev];
      old[i] = !old[i];
      return old;
    });
  };
  const onWillDelete = () => {
    if (chosen.includes(true)) modalRef.current.style.opacity = 1;
  };
  const onDelete = () => {
    //삭제
    navigate("/admin");
  };

  useEffect(() => {
    if (chosen.includes(true)) {
      btnRef.current.style.background =
        "linear-gradient(135deg, #89ec84 0%, #abc0e4 55%, #abc0e4 83%, #c7d5ed 100%)";
    } else {
      btnRef.current.style.background = "white";
    }
  }, [chosen]);

  return (
    <Background>
      <Wrap>
        <Navbar></Navbar>
        <Container>
          <Modal ref={modalRef}>
            <Text>삭제한 동아리는 복구할 수 없습니다.</Text>
            <Text>정말 삭제하시겠습니까?</Text>
            <TextWrapper>
              <SmallText onClick={onDelete}>삭제하기</SmallText>
              <span>|</span>
              <SmallText
                onClick={() => {
                  modalRef.current.style.opacity = 0;
                }}
              >
                취소
              </SmallText>
            </TextWrapper>
          </Modal>
          <div style={{ marginBottom: "10px" }}>
            <UserName>{data.name}</UserName>
            <Title> 님이 관리 중인 동아리입니다.</Title>
          </div>
          {data.list.map((club: any, i: number) => (
            <CardContainer>
              <CheckBox isActive={chosen[i]} onClick={() => onChoose(i)} />
              <SimpleCard
                key={club.name}
                name={club.name.toUpperCase()}
                desc={club.desc}
                isPrivate={club.isPrivate == "true" ? true : false}
                chosen={chosen[i]}
              />
            </CardContainer>
          ))}
          <Button ref={btnRef} onClick={onWillDelete}>
            선택 삭제
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
export default Delete;
