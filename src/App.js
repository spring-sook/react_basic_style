import "./App.css";
import StyledComponent from "./StyledComponents";
import GlobalStyle from "./GlobalStyle"; // 일괄적으로 들어갈 스타일

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledComponent />
    </>
  );
}

export default App;
