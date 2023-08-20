import { styled } from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  font-size: 24px;
  font-weight: 600;
  top: 0;
  padding-left: 24px;
  width: 100%;
  max-width: 400px;
  height: 48px;
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

function TopBar({ content }) {
  return (
    <>
      <Wrapper>{content}</Wrapper>
    </>
  );
}

export default TopBar;
