import styled from "styled-components";

export const Wrap = styled.div`
  width: 360px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`;

export const Bg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Date = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 27px;
  margin-top: 92px;
`;

export const Text = styled.div`
  color: white;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 12px;
`;

export const CodeBox = styled.div`
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

export const Code = styled.input`
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

export const InputDiv = styled.div`
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
  position: absolute;
  top: 25vh;
`;

export const InputText = styled.div`
  color: white;
  font-size: 14px;
  font-family: ${(props) => props.theme.textFont};
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;
`;

export const InputBox = styled.div`
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

export const Input = styled.input`
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

export const Btn = styled.div`
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

export const FailDiv = styled.div`
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

export const ChooseDiv = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 218px;
  display: flex;
`;

export const Ch = styled.div`
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
export const Division = styled.div`
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

export const Section = styled.div`
  width: 100%;
  height: 370px;
  height: calc(100vh - 380px);
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

export const MemberDiv = styled.div`
  width: 96%;
  height: 33px;
  margin: 5px;
  color: white;
  display: flex;
`;

export const MemberText = styled.div`
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

export const BarArea = styled.div`
  width: 45px;
  height: 4px;
  border-radius: 3px;
  background: white;
  margin-top: 4.5px;
`;

export const Bar = styled.div`
  width: 5%;
  height: 4px;
  border-radius: 3px;
  background: ${(props) => props.theme.gradient};
`;

export const PickDiv = styled.div`
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

export const PickBtn = styled.div`
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

export const listDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.boxColor};
  background: #0a0b0ef3;
  position: absolute;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  height: 125px;
  border: 1px solid white;
  border-radius: 12px;
`;
