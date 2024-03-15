import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorsListPage from "../ActorsListPage/ActorsListPage";
import NavBar from "../NavBar/NavBar";

function App() {
  const [user, setUser] = useState(null);

  const [userLogin, setUserLogin] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  function handleChange(event) {
    setUserLogin((prevUserLogin) => ({
      ...prevUserLogin,
      [event.target.name]: event.target.value,
      error: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // alert(JSON.stringify(userLogin));
    setUser(userLogin.name);
  }

  return (
    <main>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorsListPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                userLogin={userLogin}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      )}
    </main>
  );
}

export default App;