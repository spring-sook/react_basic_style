import styled, { css } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.color || "blue"}; // 값이 안달리면 blue
  padding: 1rem; // root에서 설정한 글자크기
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    // & : 현재 컴포넌트를 참조
    background-color: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
      // 반전이 전달됐다면...
      background: none;
      border: 2px solid white;
      color: white;
      &: hover {
        background-color: white;
        color: black;
      }
    `}
  & + button {
    // 현재 컴포넌트 바로 뒤에 나오는 button 요소
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Container color="orangered">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만</Button>
    </Container>
  );
};

export default StyledComponent;
