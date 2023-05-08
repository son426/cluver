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
  display: inline-block;
  font-size: 28px;
  font-family: "Copperplate";
  font-weight: bold;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Leftdiv = styled.div`
  width: fit-content;
  position: absolute;
  display: inline-block;
  font-size: 25px;
  font-family: "Copperplate";
  font-weight: bold;
  top: 0;
  left: 25px;
  margin-top: 20px;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const MenuDiv = styled.div`
  width: fit-content;
  position: absolute;
  display: inline-block;
  font-size: 25px;
  font-family: "Copperplate";
  font-weight: bold;
  top: 0;
  right: 25px;
  margin-top: 17.5px;
  background: linear-gradient(135deg, #91e09d 0%, #abc0e4 70%);
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
