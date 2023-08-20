import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Row1 = styled.div`
  width: 100%;
`;
const Row2 = styled.div``;

function AddCompletedPage() {
  return (
    <>
      <div>새 음악이 추가되었습니다!</div>
      <div>
        <div>가수 : </div>
        <div>AI 커버 노래 : </div>
      </div>
    </>
  );
}

export default AddCompletedPage;
