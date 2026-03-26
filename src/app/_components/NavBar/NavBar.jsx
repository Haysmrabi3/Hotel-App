"use client";

import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { UserContext } from "@/Context/UserContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { userLoged, setUserLoged } = useContext(UserContext);
  const router = useRouter();

  function handleLogout() {
    setUserLoged(false);

    document.cookie = "token=; Max-Age=0; path=/";

    router.replace("/LogIn");
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center text-xl font-bold gap-2">
          <FontAwesomeIcon icon={faBuilding} />
          <span>LuxStay</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">

          <Link className="text-5 font-semibold hover:text-emerald-700"  href="/">Home</Link>

          {userLoged && (
            <>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/DashBoard">Dashboard</Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-500"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </button>
            </>
          )}

          {!userLoged && (
            <>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/SignUp">Sign Up</Link>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/LogIn">LogIn</Link>
            </>
          )}

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col">

          <Link className="text-5 font-semibold hover:text-emerald-700" href="/">Home</Link>

          {userLoged && (
            <>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/Dashboard">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="text-red-500 text-left"
              >
                Logout
              </button>
            </>
          )}

          {!userLoged && (
            <>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/LogIn">LogIn</Link>
              <Link className="text-5 font-semibold hover:text-emerald-700" href="/SignUp">Sign Up</Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
}