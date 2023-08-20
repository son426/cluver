import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isPlayingAtom, playingMusicAtom } from "../atom";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Content = styled.div``;

function PlayPage() {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingAtom);
  const [playingMusic, setPlayingMusic] = useRecoilState(playingMusicAtom);

  const audioRef = useRef(new Audio());

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Content></Content>
    </Wrapper>
  );
}
export default PlayPage;
