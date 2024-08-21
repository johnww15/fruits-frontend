import SignupForm from "../components/AuthPage/SignupForm";

export default function SignupPage({ setUser, user }) {
  return (
    <>
      <SignupForm setUser={setUser} user={user} />
    </>
  );
}
