import LoginForm from "../components/AuthPage/LoginForm";

export default function AuthPage({ setUser, user }) {
  return (
    <>
      <LoginForm setUser={setUser} user={user} />
    </>
  );
}
