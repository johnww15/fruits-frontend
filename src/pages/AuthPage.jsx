import LoginForm from "../components/LoginForm";

export default function AuthPage({ setUser, user }) {
  return (
    <>
      <LoginForm setUser={setUser} user={user} />
    </>
  );
}
