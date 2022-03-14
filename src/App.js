import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
