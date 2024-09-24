import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className="sticky top-10 z-[9999] mx-auto w-[80%] bg-white/10 backdrop-blur-md border border-gray-300 rounded-[50px] shadow-[0px_0px_20px_2px_rgba(0,132,255,0.1)]
"
    >
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#F2F5EA] text-2xl font-bold">
            A3sher
          </Link>
        </div>

        <ul
          className="flex h-screen max-h-0 w-full flex-col items-start opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                className="block px-2 py-2 no-underline outline-none hover:no-underline"
                href={item.href}
              >
                <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
