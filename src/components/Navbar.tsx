import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 65px;
  position: absolute;
  top: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

const Cluver = styled.div`
  width: fit-content;
  position: absolute;
  font-size: 28px;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Leftdiv = styled.div`
  width: fit-content;
  position: absolute;
  font-size: 25px;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: bold;
  left: 25px;
  margin-top: 20px;
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const MenuDiv = styled.div`
  width: fit-content;
  position: absolute;
  font-size: 25px;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: bold;
  right: 25px;
  margin-top: 17.5px;
  background: ${(props) => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

function Navbar() {
  return (
    <>
      <Container>
        <Leftdiv>♣</Leftdiv>
        <Cluver>CLUVER</Cluver>
        <MenuDiv>
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "35px",
              fontVariationSettings: "'wght' 300",
            }}
          >
            menu
          </span>
        </MenuDiv>
      </Container>
    </>
  );
}

export default Navbar;
