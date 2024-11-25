import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
//header

function Header() {
  const menuName = [
    { id: 1, link: "/", name: "Profile" },
    { id: 2, link: "/resume", name: "Resume" },
    { id: 3, link: "/projects", name: "Projects" },
    { id: 4, link: "/contact", name: "Contact" },

  ];

  const location = useLocation();

  let defState = 1;

  switch (location.pathname) {
    case "/projects":
      defState = 3;
      break;
    case "/resume":
      defState = 2;
      break;
    case "/contact":
      defState = 4;
      break;
    default:
      defState = 1;
      break;
  }

  const [isActive, setActive] = useState(defState);

  const handleButtonClick = (id) => {
    setActive(id);
  };

  return (
    <>
      <div className="mx-auto text-center bg-slate-800">
        {menuName.map((menu) => (
          <Link
            to={menu.link}
            key={menu.id}
            className={`${
              isActive === menu.id ? "bg-violet-900" : "bg-violet-600"
            } p-2 mt-2 mx-1 w-24 text-xl inline-block text-center text-white cursor-pointer hover:bg-violet-900 active:bg-violet-900 rounded-t-lg ease-in-out duration-100 hover:scale-110`}
            onClick={() => {
              handleButtonClick(menu.id);
            }}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </>
  );
}

const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet /> 
    </main>
  </div>
);

export default Layout;
