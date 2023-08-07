import Fullstack from "../organism/Fullstack/Fullstack.organism"
import Register from "../organism/Register/Register.organism"

function RegisterView() {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <Fullstack />
      <Register />
    </div>
  )
}

export default RegisterView