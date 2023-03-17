import NavbarItem from "@/components/NavbarItem";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [more, setMore] = useState(true);
  const [menu, setMenu] = useState(true);
  return (
    <header>
      <nav>
        <div className="flex h-[4.35rem] mr-5 xl:mr-10">
          <div className="flex flex-wrap space-x-8 my-auto mx-5 xl:mx-10 z-20">
            <div>
              <div className={menu ? "" : "hidden lg:block"}>
                <Link href="/">
                  <svg
                    className="w-[3.85rem] h-auto object-contain mr-0.5 xl:mr-1 z-20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="21"
                    viewBox="0 0 45 21"
                  >
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
                  </svg>
                </Link>
              </div>
              <div className={menu ? "hidden" : "lg:hidden"}>
                <Link href="/">
                  <svg
                    className="w-[3.85rem] h-auto object-contain mr-0.5 xl:mr-1 z-20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="21"
                    viewBox="0 0 45 21"
                  >
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={`lg:hidden ${menu ? "" : "text-white fill-white"}`}>
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <div className="flex space-x-2">
                  <p className="mt-0.5 font-medium text-[1.2rem]">
                    <span>Menu</span>
                  </p>
                  <div className={`${menu ? "mt-3.5" : "mb-2.5 rotate-180"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex my-auto justify-between w-full font-medium text-[0.9rem] xl:text-[1.1rem]">
            <div className="flex space-x-5 xl:space-x-8 my-auto">
              <NavbarItem value="Live"></NavbarItem>
              <NavbarItem value="Push"></NavbarItem>
              <NavbarItem value="Note"></NavbarItem>
              <NavbarItem value="Link"></NavbarItem>
              <NavbarItem value="Shop"></NavbarItem>
              <NavbarItem value="Packs"></NavbarItem>
              <NavbarItem value="Help"></NavbarItem>

              <div>
                <button
                  onClick={() => {
                    setMore(!more);
                  }}
                >
                  <div className="flex space-x-0.5 xl:space-x-1">
                    <p>
                      <span>More</span>
                    </p>
                    <div className="mt-[0.05rem] xl:mt-[0.2rem]">
                      <div className={more ? "" : "hidden"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                        </svg>
                      </div>
                      <div className={more ? "hidden" : ""}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 11h14v2H5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex space-x-5 xl:space-x-7 text-[0.8rem] xl:text-[1.1rem]">
              <a href="https://www.ableton.com/en/trial/">
                <div>
                  <p className="text-[#0000FF]">
                    <span>Try Live for free</span>
                  </p>
                </div>
              </a>
              <a href="https://www.ableton.com/en/login/?next=/en/">
                <div>
                  <p>
                    <span className="xl:text-[0.9rem]">Log in or register</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          className={
            menu
              ? "hidden"
              : "bg-[#0000FF] text-white absolute inset-x-0 top-0 pt-[4.6rem] px-4 flex flex-col gap-6 text-[1.15rem] font-medium z-10 lg:hidden"
          }
        >
          <NavbarItem value="Live"></NavbarItem>
          <NavbarItem value="Push"></NavbarItem>
          <NavbarItem value="Note"></NavbarItem>
          <NavbarItem value="Link"></NavbarItem>
          <NavbarItem value="Shop"></NavbarItem>
          <NavbarItem value="Packs"></NavbarItem>
          <NavbarItem value="Help"></NavbarItem>
          <a href="https://www.ableton.com/en/trial/">
            <p>Try Live for free</p>
          </a>
          <a href="https://www.ableton.com/en/login/?next=/en/">
            <p className="text-[0.85rem] font-normal">Log in or register</p>
          </a>
          <div>
            <p>More on Ableton.com:</p>
            <div className="flex flex-col gap-3.5 mt-2.5 text-[0.85rem] font-normal">
              <a href="https://www.ableton.com/en/blog/">
                <p>Blog</p>
              </a>
              <a href="https://www.ableton.com/en/classroom/">
                <p>Ableton for the Classroom</p>
              </a>
              <a href="https://www.ableton.com/en/colleges-universities/">
                <p>Ableton for Colleges and Universities</p>
              </a>
              <a href="https://www.ableton.com/en/certified-training/">
                <p>Certified Training</p>
              </a>
              <a href="https://www.ableton.com/en/about/">
                <p>About Ableton</p>
              </a>
              <a href="https://www.ableton.com/en/jobs/">
                <p>Jobs</p>
              </a>
              <a href="https://www.ableton.com/en/ausbildung/">
                <p>Apprenticeships</p>
              </a>
            </div>
          </div>
          <div>
            <p>More from Ableton:</p>
            <div className="text-[0.85rem] pt-3 font-normal flex overflow-y-auto pb-5 gap-5">
              <a href="https://www.ableton.com/en/blog/loop/">
                <p className="font-medium">Loop</p>
                <p className="w-52">
                  Watch Talks, Performances and Features from Ableton's Summit
                  for Music Makers
                </p>
              </a>
              <a href="https://learningmusic.ableton.com/">
                <p className="font-medium">Learning Music</p>
                <p className="w-52">
                  Learn the fundamentals of music making right in your browser.
                </p>
              </a>
              <a href="https://learningsynths.ableton.com/">
                <p className="font-medium">Learning Synths</p>
                <p className="w-52">
                  Get started with synthesis using a web-based synth and
                  accompanying lessons.
                </p>
              </a>
              <a href="https://makingmusic.ableton.com/">
                <p className="font-medium">Making Music</p>
                <p className="w-52">
                  Some tips from 74 Creative Strategies for Electronic
                  Producers.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div
          className={
            more
              ? "hidden"
              : "hidden lg:block px-5 space-y-7 pb-8 pt-2 xl:px-10 xl:pt-7 xl:pb-16 xl:space-y-11"
          }
        >
          <div>
            <div>
              <div>
                <p className="text-[1.4rem] xl:text-[1.7rem] font-medium mb-2">
                  More on Ableton.com:
                </p>
              </div>
              <div className="flex space-x-4 xl:space-x-8 text-[0.95rem] xl:text-[1.15rem]">
                <a href="https://www.ableton.com/en/blog/">
                  <div>
                    <p>Blog</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/classroom/">
                  <div>
                    <p>Ableton for the Classroom</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/colleges-universities/">
                  <div>
                    <p>Ableton for Colleges and Universities</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/certified-training/">
                  <div>
                    <p>Certified Training</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/about/">
                  <div>
                    <p>About Ableton</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/jobs/">
                  <div>
                    <p>Jobs</p>
                  </div>
                </a>
                <a href="https://www.ableton.com/en/ausbildung/">
                  <div>
                    <p>Apprenticeships</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p className="text-[1.4rem] xl:text-[1.7rem] font-medium mb-2">
                  More from Ableton:
                </p>
              </div>
              <div className="grid grid-cols-4 text-[0.95rem] xl:text-[1.1rem] gap-12">
                <a href="https://www.ableton.com/en/blog/loop/">
                  <div>
                    <p className="font-medium">Loop</p>
                    <p>
                      Watch Talks, Performances and Features from Ableton's
                      Summit for Music Makers
                    </p>
                  </div>
                </a>
                <a href="https://learningmusic.ableton.com/">
                  <div>
                    <p className="font-medium">Learning Music</p>
                    <p>
                      Learn the fundamentals of music making right in your
                      browser.
                    </p>
                  </div>
                </a>
                <a href="https://learningsynths.ableton.com/">
                  <div>
                    <p className="font-medium">Learning Synths</p>
                    <p>
                      Get started with synthesis using a web-based synth and
                      accompanying lessons.
                    </p>
                  </div>
                </a>
                <a href="https://makingmusic.ableton.com/">
                  <div>
                    <p className="font-medium">Making Music</p>
                    <p>
                      Some tips from 74 Creative Strategies for Electronic
                      Producers.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
