import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createCheckCode, getCheckCode, tokenValidate } from "../util/api";
import { useEffect, useRef } from "react";
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
  padding: 18px;
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
const Logo = styled.img`
  width: 30px;
  height: 30px;
  transform: translateY(-5%) translateX(-2%);
  object-fit: contain;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.textFont};
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 3px;
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
    font-size: 11px;
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
  id: number;
  name: string;
  desc: string;
  img: string;
  isPrivate: boolean;
  code: string;
}
function Card({ id, name, desc, img, isPrivate, code }: IProps) {
  const navigate = useNavigate();

  const iconRef = useRef<any>(null);
  const imgRef = useRef<any>(null);
  const checkCodeRef = useRef<any>(null);

  const today = new Date();

  const onCreateCode = async () => {
    const response = await tokenValidate(localStorage.getItem("token"));
    if (response) {
      const response2 = await getCheckCode(
        today.getMonth() + 1,
        today.getDate(),
        id
      );
      if (response2.data.isValid === true) {
        //출석코드 이미 생성 && 유효
        const code = response2.data.checkCode;
        navigate("/checkcode", {
          state: {
            id: id,
            name: name,
            desc: desc,
            isPrivate: isPrivate,
            checkCode: code,
          },
        });
      } else if (response2.status === 201) {
        //출석코드 생성 안 됨
        const ch = window.confirm("출석 코드를 생성하시겠습니까?");
        if (ch) {
          const response3 = await createCheckCode(
            today.getMonth() + 1,
            today.getDate(),
            id
          );
          if (response3.status === 201) {
            const code = response3.data.checkCode;
            navigate("/checkcode", {
              state: {
                id: id,
                name: name,
                desc: desc,
                isPrivate: isPrivate,
                checkCode: code,
              },
            });
          } else {
            console.log(response3);
          }
        }
      } else {
        //출석코드 마감
        console.log(response2);
        const code = response2.data.checkCode;
        navigate("/checkcode", {
          state: {
            id: id,
            name: name,
            desc: desc,
            isPrivate: isPrivate,
            checkCode: code,
          },
        });
      }
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
        state: {
          id: id,
          name: name,
          desc: desc,
          img: img,
          isPrivate: isPrivate,
          code: code,
        },
      });
    } else {
      navigate("/login");
      console.log(response);
    }
  };
  const handleImgError = () => {
    //img src가 유효하지 않은 경우 클로버 아이콘을 띄움
    imgRef.current.style.display = "none";
    iconRef.current.style.display = "block";
  };

  const checkCodeIsValid = async () => {
    const response = await getCheckCode(
      today.getMonth() + 1,
      today.getDate(),
      id
    );
    console.log(response);
    if (response.data?.isValid === false) {
      //출석코드 마감
      //checkCodeRef.current.style.color = "#6a5f5f";
      //checkCodeRef.current.style.cursor = "default";
      //checkCodeRef.current.style.text = "출석 코드 생성하기(마감)";
    }
  };
  useEffect(() => {
    checkCodeIsValid();
  }, []);
  return (
    <Container>
      <Bg>
        <TitleWrapper>
          <TitleWrapper>
            <Icon>
              <Logo ref={imgRef} src={img} onError={handleImgError} />
              <span
                ref={iconRef}
                style={{ lineHeight: "160%", display: "none" }}
              >
                ♣
              </span>
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
          <Text ref={checkCodeRef} onClick={onCreateCode}>
            오늘의 출석 코드
          </Text>
          <span>|</span>
          <Text onClick={onEdit}>동아리 정보</Text>
        </TextWrapper>
      </Bg>
    </Container>
  );
}
export default Card;
