import { signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseConnection";

export function Header() {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header className="w-full max-w-3xl mt-4 p-4">
      <nav className="w-full bg-white h-12 flex items-center rounded">
        <button className="border-0 mr-6 ml-2" onClick={handleLogout}>
          <BiLogOut size={28} color="#d82629" />
        </button>

        <Link
          className="mr-3 text-['#21242d'] hover:text-yellow-500 transition-colors "
          to="/admin"
        >
          Links
        </Link>
        <Link
          className="mr-3 text-['#21242d'] hover:text-yellow-500 transition-colors "
          to="/admin/social"
        >
          Redes Socials
        </Link>
      </nav>
    </header>
  );
}
