import { styled } from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${(props) => (props.isboolean ? "blue" : "black")};
  font-size: 15px;
  .icon {
    font-size: 1.4em;
  }
`;

function NavBar() {
  const [clickNum, setClickNum] = useState(1);

  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Column
          isboolean={clickNum === 1} //
          onClick={() => {
            setClickNum(1);
            navigate("/");
          }}
        >
          <GoHomeFill className="icon" />홈
        </Column>
        <Column
          isboolean={clickNum === 2} //
          onClick={() => {
            setClickNum(2);
            navigate("/search");
          }}
        >
          <AiOutlineSearch className="icon" />
          탐색
        </Column>
        <Column
          isboolean={clickNum === 3} //
          onClick={() => {
            setClickNum(3);
            navigate("/request");
          }}
        >
          <MdLibraryMusic className="icon" />
          요청하기
        </Column>
        <Column
          isboolean={clickNum === 4} //
          onClick={() => {
            setClickNum(4);
            navigate("/my");
          }}
        >
          <BsFillPersonFill
            className="icon"
            isboolean={clickNum === 4}
            onClick={() => setClickNum(4)}
          />
          내 음악
        </Column>
      </Wrapper>
    </>
  );
}

export default NavBar;
