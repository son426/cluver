import { styled } from "styled-components";
import playlist from "../data/playlist_play.png";
import { useEffect, useRef, useState } from "react";
import { BiSkipPrevious, BiSkipNext, BiPlay, BiPause } from "react-icons/bi";
import { useRecoilState } from "recoil";
import park from "../audio/park.mp3";
import { isPlayingAtom, playingMusicAtom } from "../atom.ts";

const Wrapper = styled.div`
  width: 375px;
  height: 72px;
  padding: 16px;
  display: flex;

  position: fixed;
  bottom: 56px;
  background-color: white;
  align-items: center;
  cursor: pointer;
`;
const Column1 = styled.div`
  background-image: url(${playlist});
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  cursor: pointer;
`;
const Column2 = styled.div`
  width: 161px;
  height: 35px;
  margin-right: 20px;
  .title {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .singer {
    font-size: 12px;
    color: #7b7b7b;
  }
`;
const Column3 = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon1,
  .icon3 {
    width: 35px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .icon2 {
    width: 40px;
    height: 40px;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
`;

function PlayBar() {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingAtom);
  const [playingMusic, setPlayingMusic] = useRecoilState(playingMusicAtom);

  const audioRef = useRef(new Audio(playingMusic.audio));

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Column1></Column1>
      <Column2>
        <div className="title">{playingMusic.title}</div>
        <div className="singer">{playingMusic.coverSinger}</div>
      </Column2>
      <Column3>
        <div className="icon1">
          <BiSkipPrevious />
        </div>
        <div className="icon2">
          {isPlaying && (
            <BiPause
              onClick={() => {
                setIsPlaying((prev) => !prev);
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
              }}
            />
          )}
          {isPlaying || (
            <BiPlay
              onClick={() => {
                setIsPlaying((prev) => !prev);
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  audioRef.current.play();
                }
              }}
            />
          )}
        </div>
        <div className="icon1">
          <BiSkipNext />
        </div>
      </Column3>
    </Wrapper>
  );
}

export default PlayBar;
