import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useRef, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import moment from "moment";
import "./Calendar.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  display: flex;
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

const PickDiv = styled.div`
  //opacity: 0;
  width: 220px;
  height: 125px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${(props) => props.theme.bgColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PickBtn = styled.div`
  display: inline-block;
  width: 35px;
  height: 14px;
  color: ${(props) => props.theme.bgColor};
  background: white;
  font-size: 10.5px;
  margin-left: 10px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  line-height: 13px;
`;

function Attendance() {
  const params = useParams();

  let arr = [
    {
      user_name: "",
      code: "",
      attendances: [] as any,
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
  const [date, setDate] = useState<any>();
  const [fmDate, setFmDate] = useState(date);
  const pick = useRef<any>();
  let resAPI = [] as any;

  const key = "1234";
  const today = moment().format("YYYY-MM-DD");

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

  useEffect(() => {
    let fmDate = moment(date).format("YYYY-MM-DD");
    setFmDate(fmDate);
    setTimeout(() => {
      pick.current.style.opacity = "1";
      pick.current.style.zIndex = "3";
    }, 100);
  }, [date]);

  function checkValid() {
    if (birth.length !== 4) {
      alert("생일 4자리를 입력해주세요.");
    } else {
    }
  }

  const [flag, setF] = useState<any>(0);
  /* const url = "http://172.20.10.4:8000/club/" + params.userID;
  axios.get(url).then(function (response) {
    resAPI = response.data;
  }); */

  const Api = async () => {
    try {
      const url = "http://172.20.10.4:8000/club/" + params.userID;
      const response = await axios.get(url);
      resAPI = response.data;
      console.log(resAPI);
      setArr(resAPI.users);
      if (resAPI.users) {
        setF(1);
      } else {
        console.log("2");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Api();
    setArr(resAPI.users);
    if (a.length > 0) {
      a.forEach((e) => {
        console.log(e.attendances);
      });
    } else {
      console.log("yet");
    }
  }, [flag]);

  return (
    <>
      <Wrap>
        <Bg>
          <Navbar />
          <Date>{today}</Date>
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
                maxLength={4}
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
              {a?.map((e: any) => {
                let ct = 0;
                let per = Math.round((ct / e.attendances.length) * 100);
                return (
                  <li>
                    <MemberDiv>
                      <MemberText
                        style={{
                          marginLeft: "7px",
                          width: "50px",
                        }}
                      >
                        {e.user_name}
                      </MemberText>
                      <MemberText style={{ marginRight: "5px" }}>
                        {e.code}
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
                        {e.attendances?.map((i: any) => {
                          if (i.isChecked === true) {
                            ct++;
                            per = Math.round((ct / e.attendances.length) * 100);
                            return (
                              <span
                                style={{
                                  cursor: "pointer",
                                  marginRight: "5px",
                                  color: "#9ee69a",
                                }}
                              >
                                ♣
                              </span>
                            );
                          } else {
                            per = Math.round((ct / e.attendances.length) * 100);
                            return (
                              <span
                                style={{
                                  cursor: "pointer",
                                  marginRight: "5px",
                                  color: "grey",
                                }}
                              >
                                ♣
                              </span>
                            );
                          }
                        })}
                        {/* <span
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
                        </span> */}
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
                          <Bar
                            style={{
                              width: `${per}%`,
                            }}
                          ></Bar>
                        </BarArea>
                      </MemberText>
                      <MemberText style={{ textAlign: "right" }}>
                        {per} %
                      </MemberText>
                    </MemberDiv>
                  </li>
                );
              })}
            </ul>
          </Section>
          <Section
            ref={(e) => {
              or.current[3] = e;
            }}
            style={{ opacity: "0" }}
          >
            <Calendar
              className="react-calendar"
              calendarType="US"
              minDetail="month"
              maxDetail="month"
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => moment(date).format("DD")}
              onChange={setDate}
              value={date}
            ></Calendar>
            <PickDiv ref={pick}>
              <InputText style={{ margin: "20px auto 0" }}>{fmDate}</InputText>
              <InputText
                style={{
                  marginTop: "10px",
                  marginLeft: "53px",
                  marginBottom: "0",
                }}
              >
                활동 내용 : 정기 회합
              </InputText>
              <InputText
                style={{
                  marginTop: "7px",
                  marginLeft: "53px",
                }}
              >
                출석 인원 : 12 <PickBtn>출석부</PickBtn>
              </InputText>
              <InputText
                style={{
                  margin: "2px auto",
                }}
                onClick={() => {
                  pick.current.style.opacity = "0";
                  pick.current.style.zIndex = "-3";
                }}
              >
                <PickBtn>닫기</PickBtn>
              </InputText>
            </PickDiv>
          </Section>
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
