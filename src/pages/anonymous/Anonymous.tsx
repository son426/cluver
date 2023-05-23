import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL, searchName } from "../../util/api";
import * as S from "./Anonymous.styled";
import { ScrollRestoration, useParams } from "react-router-dom";

function Anonymous() {
  let arr = [
    { comment: "개발개발", date: "2일 전" },
    { comment: "@@님 개발 열심히 하세요~~", date: "1일 전" },
    { comment: "빨간 날에도 회합을 하는 동아리가 있?다?", date: "12시간 전" },
    { comment: "개발", date: "10분 전" },
    {
      comment:
        "ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁ",
      date: "9분 전",
    },
    { comment: "홈", date: "7분 전" },
    { comment: "브", date: "7분 전" },
    { comment: "루", date: "7분 전" },
    { comment: ".", date: "5분 전" },
    { comment: ".", date: "5분 전" },
    { comment: ".", date: "5분 전" },
    { comment: ".", date: "4분 전" },
    { comment: ".", date: "4분 전" },
    { comment: ".", date: "3분 전" },
    { comment: ".", date: "2분 전" },
    { comment: ".", date: "1분 전" },
  ];

  const params = useParams();
  let resAPI = [] as any;
  const [clubName, setClubName] = useState("");
  const [a, setArr] = useState(arr);
  //const [a, setArr] = useState([] as any);
  const talks = useRef<any>(null);

  const scrollToBottom = () => {
    if (talks.current) {
      talks.current.scrollTop = talks.current.scrollHeight;
    }
  };

  const Api = async () => {
    try {
      const url = BASE_URL + "/club/" + params.clubID;
      const response = await axios.get(url);
      resAPI = response.data;
      console.log(resAPI);
      setClubName(resAPI.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Api();
    setClubName(resAPI.name);
    scrollToBottom();
  }, []);

  return (
    <>
      <S.Wrap>
        <S.Bg>
          <Navbar />
          <S.TalkDiv>
            <S.Top>
              <S.Left>
                <span className="material-symbols-outlined">chat_bubble</span>
                <span>34</span>
              </S.Left>
              <S.ClubName>{clubName}</S.ClubName>
              <S.Right>
                <span className="material-symbols-outlined">refresh</span>
              </S.Right>
            </S.Top>
            <S.ListDiv ref={talks}>
              <ul style={{ width: "100%" }}>
                {a &&
                  a?.map((e: any) => {
                    return (
                      <li key={e.id} style={{ display: "flex" }}>
                        <div style={{ height: "fit-content" }}>
                          <S.ChatDiv>
                            <S.Chat>{e.comment}</S.Chat>
                          </S.ChatDiv>
                          <S.ChatDate>{e.date}</S.ChatDate>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </S.ListDiv>
            <form>
              <S.InputDiv>
                <S.Input placeholder="익명 메시지를 작성하세요."></S.Input>
                <S.Btn type="submit">
                  <span className="material-symbols-outlined">send</span>
                </S.Btn>
              </S.InputDiv>
            </form>
          </S.TalkDiv>
          <Bottombar
            first={false}
            second={true}
            third={false}
            fourth={false}
            fifth={false}
          />
        </S.Bg>
      </S.Wrap>
    </>
  );
}

export default Anonymous;
