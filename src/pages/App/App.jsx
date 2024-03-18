import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorsListPage from "../ActorsListPage/ActorsListPage";
import NavBar from "../NavBar/NavBar";
import { movies } from "../../data.js";

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

    setUser(userLogin.name);
  }

  return (
    <main>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/actors"
              element={<ActorsListPage movies={movies} />}
            />
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
