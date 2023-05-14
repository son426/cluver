import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tokenValidate } from "../util/api";

const Container = styled.div`
  width: 75%;
  margin-bottom: 15px;
  border: 1px solid transparent;
  border-radius: 15px;
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
  padding: 20px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  text-align: center;
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
  font-family: ${(props) => props.theme.textFont};
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const Desc = styled.span`
  font-size: 12px;
  font-weight: lighter;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.iconColor};
`;
const TextWrapper = styled.div`
  width: 100%;
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
interface IProps {
  name: string;
  desc: string;
  isPrivate: boolean;
}
function Card({ name, desc, isPrivate }: IProps) {
  const navigate = useNavigate();

  const onCreateCode = async () => {
    const response = await tokenValidate(localStorage.getItem("token"));
    if (response) {
      navigate("/checkcode", {
        state: { name: name, desc: desc, isPrivate: isPrivate },
      });
    } else {
      navigate("/login");
      console.log(response);
    }
  };
  const onEdit = async () => {
    const response = await tokenValidate(localStorage.getItem("token"));
    if (response) {
      navigate("/editclub", {
        //동아리설정변경하기페이지
        state: { name: name, desc: desc, isPrivate: isPrivate },
      });
    } else {
      navigate("/login");
      console.log(response);
    }
  };
  return (
    <Container>
      <Bg>
        <TitleWrapper>
          <TitleWrapper>
            <Icon>
              <span style={{ lineHeight: "160%" }}>♣</span>
            </Icon>
            <DescWrapper>
              <Title>{name}</Title>
              <Desc>{desc}</Desc>
            </DescWrapper>
          </TitleWrapper>
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "15px",
              color: "white",
              fontVariationSettings: "'FILL' 1",
            }}
          >
            {isPrivate ? "lock" : "lock_open_right"}
          </span>
        </TitleWrapper>
        <TextWrapper>
          <Text onClick={onCreateCode}>출석 코드 생성하기</Text>
          <span>|</span>
          <Text onClick={onEdit}>동아리 설정 변경하기</Text>
        </TextWrapper>
      </Bg>
    </Container>
  );
}
export default Card;
