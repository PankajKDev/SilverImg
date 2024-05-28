"use client";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/Logo.png" alt="" width={180} height={28} />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? `bg-purple-gradient text-white`
                        : `text-gray-700`
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && `brightness-200`}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? `bg-purple-gradient text-white`
                        : `text-gray-700`
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && `brightness-200`}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
            <div className="flex flex-col flex-center mt-5">
              <Link href="/privacy">
                <p className="cursor-pointer text-purple-700 mr-2">
                  Privacy Policy
                </p>
              </Link>
              <Link href="/terms">
                <p className="cursor-pointer text-purple-700 ">
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
            {/* asChild refers it will render its children as main Component instead of a button */}

            <div className="flex flex-col flex-center mt-5">
              <Link href="/privacy">
                <p className="cursor-pointer text-purple-700 mr-2">
                  Privacy Policy
                </p>
              </Link>
              <Link href="/terms">
                <p className="cursor-pointer text-purple-700 ">
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
