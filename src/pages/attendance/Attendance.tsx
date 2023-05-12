import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useRef, useState, useEffect } from "react";

const Wrap = styled.div`
  width: 360px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`;

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 27px;
  margin-top: 92px;
`;

const Text = styled.div`
  color: white;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 12px;
`;

const CodeBox = styled.div`
  width: 160px;
  border: 1px solid white;
  border-radius: 6px;
  height: 37px;
  border-radius: 7px;
  /* border: 1px solid transparent; */
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgColor}
    ),
    ${(props) => props.theme.gradient};
`;

const Code = styled.input`
  width: 160px;
  border: 1px solid white;
  border-radius: 7px;
  height: 35px;
  color: white;
  text-align: left;
  padding-left: 12px;
  padding-right: 37px;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid transparent;
  ::placeholder {
    color: ${(props) => props.theme.formColor};
  }
  :focus {
    outline: none;
  }
`;

const InputDiv = styled.div`
  width: 260px;
  height: 160px;
  border: 1px solid white;
  margin-top: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  background: ${(props) => props.theme.bgColor};
`;

const InputText = styled.div`
  color: white;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 10px;
  margin-top: 15px;
`;

const InputBox = styled.div`
  width: 180px;
  border: 1px solid white;
  border-radius: 6px;
  height: 30px;
  border-radius: 7px;
  /* border: 1px solid transparent; */
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
  width: 180px;
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

const Btn = styled.div`
  width: 180px;
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

const FailDiv = styled.div`
  opacity: 0;
  width: 260px;
  height: 80px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 290px;
  z-index: -1;
  background: ${(props) => props.theme.bgColor};
`;

const ChooseDiv = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 218px;
  display: flex;
`;

const Ch = styled.div`
  width: 49%;
  height: 20px;
  text-align: center;
  color: white;
  font-size: 13px;
  font-family: ${(props) => props.theme.textFont};
  font-weight: lighter;
  padding-top: 10px;
  cursor: pointer;
`;
const Division = styled.div`
  width: 2%;
  padding-top: 10px;
  height: 40px;
  text-align: center;
  color: white;
  font-size: 13px;
  font-family: ${(props) => props.theme.textFont};
  font-weight: lighter;
  cursor: default;
`;

const Section = styled.div`
  width: 100%;
  height: 380px;
  background: ${(props) => props.theme.boxColor};
  position: absolute;
  top: 260px;
  color: white;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.gradient};
    border-radius: 5px;
  }
`;

const MemberDiv = styled.div`
  width: 96%;
  height: 33px;
  margin: 5px;
  color: white;
  display: flex;
`;

const MemberText = styled.div`
  width: 38px;
  height: 33px;
  display: inline-block;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  font-weight: lighter;
  margin-left: 3px;
  padding-top: 10px;
  text-align: center;
  z-index: 1;
`;

const BarArea = styled.div`
  width: 45px;
  height: 4px;
  border-radius: 3px;
  background: white;
  margin-top: 4.5px;
`;

const Bar = styled.div`
  width: 5%;
  height: 4px;
  border-radius: 3px;
  background: ${(props) => props.theme.gradient};
`;

function Attendance() {
  let arr = [
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
    {
      name: "홍길동",
      birth: "0101",
      percent: "77",
    },
    {
      name: "가나다",
      birth: "0428",
      percent: "100",
    },
    {
      name: "신짱구",
      birth: "0505",
      percent: "32",
    },
  ];

  const box = useRef<any>([]);
  const [code, setCode] = useState("");
  const [ch, setCh] = useState("login");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const success = useRef<any>();
  const fail = useRef<any>();
  const or = useRef<any>([]);
  const [a, setArr] = useState(arr);

  const key = "1234";

  useEffect(() => {
    if (code !== key) {
      setCh("login");
    }
    if (code === "") {
      box.current[0].style.border = "1px solid white";
    } else {
      box.current[0].style.border = "1px solid transparent";
    }
  }, [code]);

  useEffect(() => {
    if (name === "") {
      box.current[1].style.border = "1px solid white";
    } else {
      box.current[1].style.border = "1px solid transparent";
    }
  }, [name]);

  useEffect(() => {
    if (birth === "") {
      box.current[2].style.border = "1px solid white";
    } else {
      box.current[2].style.border = "1px solid transparent";
    }
  }, [birth]);

  return (
    <>
      <Wrap>
        <Bg>
          <Navbar />
          <Date>2023-05-11</Date>
          <Text>출석 코드를 입력하세요</Text>
          <CodeBox
            ref={(e) => {
              box.current[0] = e;
            }}
          >
            <Code
              type="text"
              placeholder="CODE"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            ></Code>
            <span
              className="material-symbols-outlined"
              style={{
                color: "white",
                fontVariationSettings: "'wght' 300",
                position: "absolute",
                top: "170px",
                left: "225px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (code === key) {
                  setCh("done");
                  success.current.style.opacity = "1";
                  success.current.style.zIndex = "10";
                } else {
                  fail.current.style.opacity = "1";
                  fail.current.style.zIndex = "10";
                  setTimeout(() => {
                    fail.current.style.opacity = "0";
                    fail.current.style.zIndex = "-1";
                  }, 1500);
                }
              }}
            >
              {ch}
            </span>
          </CodeBox>
          <InputDiv ref={success}>
            <InputText>인증되었습니다.</InputText>
            <InputBox
              ref={(e) => {
                box.current[1] = e;
              }}
            >
              <Input
                type="text"
                placeholder="이름"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Input>
            </InputBox>
            <InputBox
              ref={(e) => {
                box.current[2] = e;
              }}
            >
              <Input
                type="text"
                placeholder="생일 4자리"
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
              ></Input>
            </InputBox>
            <Btn
              ref={(e) => {
                box.current[3] = e;
              }}
              onMouseEnter={() => {
                if (name !== "" && birth !== "") {
                  box.current[3].style.background =
                    "linear-gradient(135deg, #89ec84 0%, #abc0e4 55%, #abc0e4 83%, #c7d5ed 100%)";
                } else {
                  box.current[3].style.background = "white";
                }
              }}
              onMouseLeave={() => {
                box.current[3].style.background = "white";
              }}
              onClick={() => {
                setTimeout(() => {
                  success.current.style.opacity = "0";
                  success.current.style.zIndex = "-1";
                }, 100);
              }}
            >
              출석체크
            </Btn>
          </InputDiv>
          <FailDiv ref={fail}>
            <InputText style={{ marginTop: "20px" }}>
              유효하지 않은 출석 코드입니다.
            </InputText>
            <InputText style={{ marginTop: "0" }}>다시 입력해주세요.</InputText>
          </FailDiv>
          <ChooseDiv>
            <Ch
              ref={(e) => {
                or.current[0] = e;
              }}
              style={{ color: "#89EC84" }}
              onClick={() => {
                or.current[0].style.color = "#89EC84";
                or.current[1].style.color = "white";
                or.current[2].style.opacity = "1";
                or.current[3].style.opacity = "0";
              }}
            >
              명단으로 보기
            </Ch>
            <Division>|</Division>
            <Ch
              ref={(e) => {
                or.current[1] = e;
              }}
              onClick={() => {
                or.current[1].style.color = "#89EC84";
                or.current[0].style.color = "white";
                or.current[3].style.opacity = "1";
                or.current[2].style.opacity = "0";
              }}
            >
              캘린더로 보기
            </Ch>
          </ChooseDiv>
          <Section
            ref={(e) => {
              or.current[2] = e;
            }}
            style={{ opacity: "1" }}
          >
            <ul>
              {a.map((e) => (
                <li>
                  <MemberDiv>
                    <MemberText
                      style={{
                        marginLeft: "7px",
                        width: "50px",
                      }}
                    >
                      {e.name}
                    </MemberText>
                    <MemberText style={{ marginRight: "5px" }}>
                      {e.birth}
                    </MemberText>
                    <MemberText
                      style={{
                        width: "21px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "22px",
                          lineHeight: "12px",
                          cursor: "pointer",
                        }}
                      >
                        navigate_before
                      </span>
                    </MemberText>
                    <MemberText
                      style={{
                        width: "85px",
                        marginLeft: "0",
                        color: "grey",
                        fontFamily: "copperplate",
                        fontSize: "17px",
                        paddingTop: "7px",
                      }}
                    >
                      <span
                        style={{
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "#9ee69a",
                        }}
                      >
                        ♣
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "#9ee69a",
                        }}
                      >
                        ♣
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "grey",
                        }}
                      >
                        ♣
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "grey",
                        }}
                      >
                        ♣
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          marginRight: "1px",
                          color: "#9ee69a",
                        }}
                      >
                        ♣
                      </span>
                    </MemberText>
                    <MemberText
                      style={{
                        width: "18px",
                        marginLeft: "0",
                        marginRight: "10px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "22px",
                          lineHeight: "12px",
                        }}
                      >
                        navigate_next
                      </span>
                    </MemberText>
                    <MemberText style={{ width: "50px" }}>
                      <BarArea>
                        <Bar style={{ width: `${e.percent}%` }}></Bar>
                      </BarArea>
                    </MemberText>
                    <MemberText style={{ textAlign: "right" }}>
                      {e.percent} %
                    </MemberText>
                  </MemberDiv>
                </li>
              ))}
            </ul>
          </Section>
          <Section
            ref={(e) => {
              or.current[3] = e;
            }}
            style={{ opacity: "0" }}
          ></Section>
          <Bottombar
            first={true}
            second={false}
            third={false}
            fourth={false}
            fifth={false}
          />
        </Bg>
      </Wrap>
    </>
  );
}

export default Attendance;
