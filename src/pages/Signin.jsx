import { useLogin } from "../hooks/useLogin";

function Signin() {
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-secondary">
        Google
      </button>
    </div>
  );
}

export default Signin;
