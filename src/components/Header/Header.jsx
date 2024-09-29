import { motion } from "framer-motion";
import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const transition = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
      <nav className="grid grid-cols-[1fr_4fr_1fr] w-full text-lg py-5 fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-10 border-dotted border-b-2">
        <div className="flex justify-between items-center col-start-2">
          <h1 className="text-5xl headerH">Rento</h1>
          <div className="flex">
            <ul className="flex justify-between">
              <li className="border-r border-black-500 pr-3">
                <motion.button className="rounded-xl px-5 py-1 bg-slate-800 text-white cursor-pointer hover:bg-black duration-200">
                  Log In
                </motion.button>
              </li>
              <li className="pl-3">
                <motion.button className="border border-black-500 rounded-xl px-4 py-1 cursor-pointer hover:bg-slate-200 duration-200">
                  Sign Up
                </motion.button>
              </li>
            </ul>
            <div
              className={classNames(
                "flex w-16 rounded-full border-2 border-black-500 px-1 py-1 bg-white ml-3 items-center",
                { "justify-start": !click, "justify-end": click }
              )}
              data-clicked={click}
              onClick={handleClick}
            >
              <div>
                {click === false ? (
                  <motion.div
                    layout
                    transition={transition}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sun opacity-60"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    transition={transition}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-moon opacity-60"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
