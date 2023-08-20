import { atom } from "recoil";
import iu from "./audio/iu.mp3";

export const isPlayingAtom = atom({
  key: "isPlaying",
  default: false,
});

export const playingMusicAtom = atom({
  key: "isPlayingMusic",
  default: {
    // coverImg: "",
    // title: "",
    // coverSinger: "",
    // audio: "",
    coverImg:
      "https://photo.jtbc.co.kr/news/jam_photo/202305/09/82bddd0c-e3cd-42eb-a282-bb2deaf92333.jpg",
    title: "헤어지자 말해요",
    coverSinger: "최정훈",
    audio: iu,
  },
});
