/* --save --legacy-peer-deps */
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL, searchName } from "../../util/api";

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

const Logo = styled.img`
  width: 180px;
  margin-top: 200px;
`;

const Text = styled.div`
  color: white;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 10px;
`;

const SearchBox = styled.div`
  width: 230px;
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

const Search = styled.input`
  width: 230px;
  border: 1px solid white;
  border-radius: 7px;
  height: 35px;
  color: white;
  text-align: left;
  padding-left: 12px;
  padding-right: 37px;
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

const SearchIcon = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  color: white;
  margin-top: -28px;
  margin-left: 199px;
`;

const ResDiv = styled.div`
  width: 230px;
  height: 180px;
  margin-top: 7px;
  opacity: 0;
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

const Res = styled.div`
  width: 230px;
  height: 47px;
  color: white;
  font-size: 12px;
  font-family: ${(props) => props.theme.textFont};
  cursor: pointer;
  position: relative;
  display: flex;
`;

const ResImg = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  line-height: 170%;
  font-family: ${(props) => props.theme.titleFont};
  margin: 5px;
  margin-top: 8px;
  //position: absolute;
  :hover {
    cursor: pointer;
  }
`;

const ResText = styled.div`
  width: 155px;
  height: 46px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
`;

const ResName = styled.div`
  width: 150px;
  height: fit-content;
  height: 13px;
  font-size: 13px;
  //margin-left: 45px;
  margin-bottom: 3px;
  margin-top: 8px;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;

const ResAbout = styled.div`
  width: 150px;
  //margin-left: 45px;
  height: fit-content;
  font-weight: lighter;
  display: inline;
`;

const ResLock = styled.div`
  width: 20px;
  height: 20px;
  //position: absolute;
  //margin-left: 200px;
  //margin-top: -25px;
  margin-top: 10px;
`;

const InputDiv = styled.div`
  width: 260px;
  height: 125px;
  border: 1px solid white;
  margin-top: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  background: ${(props) => props.theme.bgColor};
  position: absolute;
  top: 22vh;
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

function Main() {
  /* let arr = [
    {
      name: "HOMEBREW",
      img: "logo",
      src: "",
      about: "개발 동아리",
      lock: "lock_open_right",
    },
    {
      name: "HOMEBREWWW",
      img: "logo",
      src: "",
      about: "괴발개발 동아리",
      lock: "lock",
    },
  ]; */
  const search = useRef<any>(null);
  const res = useRef<any>(null);
  const [word, setWord] = useState("");
  const [a, setArr] = useState([] as any);
  //const [resAPI, getRes] = useState([]);
  var resAPI = [] as any;
  const [code, setCode] = useState("");
  const box = useRef<any>([]);
  const priv = useRef<any>(null);
  const [key, setKey] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    if (word === "") {
      search.current.style.border = "1px solid white";
      res.current.style.opacity = "0";
    } else {
      searchClub();
      search.current.style.border = "1px solid transparent";
      res.current.style.opacity = "1";
    }
  }, [word]);

  /* function Api() {
    const url = "http://172.30.1.58:8000/club";
    axios.get(url).then(function (response) {
      get(response.data);
      console.log(resAPI);
    });
  } */

  const Api = async () => {
    try {
      const url = "http://172.20.10.4:8000/club";
      const response = await axios.get(url);
      //getRes(response.data);
      //console.log(response.data);
      resAPI = response.data;
      console.log(resAPI);
    } catch (err) {
      console.log(err);
    }
  };

  const searchClub = async () => {
    const response = await searchName(word);
    setArr(response);
    console.log(response);
  };

  useEffect(() => {
    if (code === "") {
      box.current[0].style.border = "1px solid white";
    } else {
      box.current[0].style.border = "1px solid transparent";
    }
  }, [code]);

  return (
    <>
      <Wrap>
        <Bg>
          <Navbar />
          <Logo src={logo} onClick={Api} />
          <Text>활동 중인 동아리를 찾아보세요</Text>
          <SearchBox ref={search}>
            <Search
              type="text"
              placeholder="SEARCH"
              onChange={(e) => {
                setWord(e.target.value);
              }}
            ></Search>
            <SearchIcon>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "22px",
                  fontVariationSettings: "'wght' 200",
                }}
              >
                search
              </span>
            </SearchIcon>
          </SearchBox>
          <ResDiv ref={res}>
            <ul>
              {a?.map((e: any) => {
                let lock = "lock";
                if (e.status === "PUBLIC") {
                  lock = "lock_open_right";
                }
                return (
                  <li key={e.id}>
                    <Res
                      onClick={() => {
                        if (e.status === "PUBLIC") {
                          window.location.href = `/attendance/${e.id}`;
                        } else {
                          priv.current.style.opacity = "1";
                          priv.current.style.zIndex = "10";
                          setKey(e.club_code);
                          setId(e.id);
                        }
                      }}
                    >
                      <ResImg>♣</ResImg>
                      <ResText>
                        <ResName>{e.name}</ResName>
                        <ResAbout>{e.description}</ResAbout>
                      </ResText>
                      <ResLock>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: "15px",
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          {lock}
                        </span>
                      </ResLock>
                    </Res>
                  </li>
                );
              })}
            </ul>
          </ResDiv>
          <InputDiv ref={priv}>
            <InputText>동아리 코드를 입력해주세요.</InputText>
            <InputBox
              ref={(e) => {
                box.current[0] = e;
              }}
            >
              <Input
                type="text"
                placeholder="동아리 코드"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              ></Input>
            </InputBox>
            <Btn
              ref={(e) => {
                box.current[1] = e;
              }}
              onMouseEnter={() => {
                if (code !== "") {
                  box.current[1].style.background =
                    "linear-gradient(135deg, #89ec84 0%, #abc0e4 55%, #abc0e4 83%, #c7d5ed 100%)";
                } else {
                  box.current[1].style.background = "white";
                }
              }}
              onMouseLeave={() => {
                box.current[1].style.background = "white";
              }}
              onClick={() => {
                console.log(code);
                if (code === key) {
                  window.location.href = `/attendance/${id}`;
                } else {
                  alert("올바르지 않은 코드입니다. 다시 입력해주세요.");
                  setTimeout(() => {
                    priv.current.style.opacity = "0";
                    priv.current.style.zIndex = "-1";
                  }, 200);
                }
              }}
            >
              코드 확인
            </Btn>
          </InputDiv>
          <Bottombar
            first={false}
            second={false}
            third={false}
            fourth={false}
            fifth={true}
          />
        </Bg>
      </Wrap>
    </>
  );
}

export default Main;
