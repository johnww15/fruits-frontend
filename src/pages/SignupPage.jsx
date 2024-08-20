import SignupForm from "../components/SignupForm";

export default function SignupPage({ setUser, user }) {
  return (
    <>
      <SignupForm setUser={setUser} user={user} />
    </>
  );
}
