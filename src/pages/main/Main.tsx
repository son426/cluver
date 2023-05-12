import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";

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
  height: 200px;
  margin-top: 7px;
  opacity: 0;
  overflow: hidden;
`;

const Res = styled.div`
  width: 230px;
  height: 47px;
  color: white;
  font-size: 12px;
  font-family: ${(props) => props.theme.textFont};
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
  position: absolute;
  :hover {
    cursor: pointer;
  }
`;

const ResName = styled.div`
  width: 160px;
  height: fit-content;
  font-size: 13px;
  margin-left: 45px;
  margin-bottom: 3px;
  margin-top: 8px;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;

const ResAbout = styled.div`
  width: 160px;
  margin-left: 45px;
  height: fit-content;
  font-weight: lighter;
  display: inline;
`;

const ResLock = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 200px;
  margin-top: -25px;
`;

function Main() {
  let arr = [
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
  ];
  const search = useRef<any>(null);
  const res = useRef<any>(null);
  const [word, setWord] = useState("");
  const [a, setArr] = useState(arr);

  useEffect(() => {
    if (word === "") {
      search.current.style.border = "1px solid white";
      res.current.style.opacity = "0";
    } else {
      search.current.style.border = "1px solid transparent";
      res.current.style.opacity = "1";
    }
  }, [word]);

  return (
    <>
      <Wrap>
        <Bg>
          <Navbar />
          <Logo src={logo} />
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
              {a.map((e) => (
                <li>
                  <Res>
                    <ResImg>♣</ResImg>
                    <ResName>{e.name}</ResName>
                    <ResAbout>{e.about}</ResAbout>
                    <ResLock>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "15px",
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        {e.lock}
                      </span>
                    </ResLock>
                  </Res>
                </li>
              ))}
            </ul>
          </ResDiv>
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
