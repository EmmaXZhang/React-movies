/* eslint-disable react/prop-types */
import SignUpForm from "../../components/SignUpForm";

export default function Login({ userLogin, handleChange, handleSubmit }) {
  return (
    <>
      <h1>Login</h1>
      <SignUpForm
        userLogin={userLogin}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
