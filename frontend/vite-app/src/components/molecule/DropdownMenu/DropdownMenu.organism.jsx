import { Link, useLocation } from "react-router-dom";

function DropdownMenu({ icon, name, href }) {
  const { pathname } = useLocation();

  return (
    <div
      className={`w-full ${
        pathname === href ? "bg-dark-20/20" : "bg-dark-10"
      } hover:bg-dark-20/10 py-2`}
    >
      <Link to={href} className="flex px-2 p-1 items-center gap-4 text-dark-20">
        {icon}
        <h1>{name}</h1>
      </Link>
    </div>
  );
}

export default DropdownMenu;
