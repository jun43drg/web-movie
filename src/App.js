import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SigupPage";
import Header from "./components/Header/Header";
import MovieDetail from "./MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/movies/:id" element={<MovieDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
