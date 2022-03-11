import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
