
import Fullstack from "../organism/Fullstack/Fullstack.organism";
import Login from "../organism/Login/Login.organism";
function LoginView() {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <Fullstack />
      <Login />
    </div>
  );
}

export default LoginView;
