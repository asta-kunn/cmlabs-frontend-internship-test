import React from "react";
import MenuDropdownHover from "./MenuDropdownHover";
import { NAV_ROUTE } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed z-[100] items-center h-16 top-0 w-full text-black flex flex-row justify-between px-10 py-4 bg-white">
      <a className="text-xl font-bold" href="/">
        mealapp
      </a>
      <div className="flex justify-end items-center">
        <div className="hidden md:flex flex-row gap-10 ">
          {NAV_ROUTE.map(({ id, href, name, dropdownMenu }) => {
            return (
              <Link key={id} href={href}>
                <div>
                  <button
                    className={
                      router.asPath === href
                        ? "font-semibold text-[16px] text-red-200"
                        : "text-[16px] text-black"
                    }
                  >
                    {name}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <NavbarMobile />
        </div>
      </div>
    </div>
  );
};
