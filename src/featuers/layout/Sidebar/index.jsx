"use client";
import { useState, useEffect } from "react";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  Cog8ToothIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/web/Home", icon: HomeIcon, current: true },
  {
    name: "Messages",
    href: "/web/Messages",
    icon: EnvelopeIcon,
    current: false,
  },
  {
    name: "Meetings",
    href: "/web/Meetings",
    icon: VideoCameraIcon,
    current: false,
  },
  { name: "Browse", href: "/web/Browse", icon: GlobeAltIcon, current: false },

  {
    name: "Schedule",
    href: "#",
    icon: CalendarDaysIcon,
    count: "20+",
    current: false,
  },
  {
    name: "Settings",
    href: "/web/Settings",
    icon: Cog8ToothIcon,
    current: false,
  },
  {
    name: "Support",
    href: "/web/Support",
    icon: ClipboardDocumentIcon,
    current: false,
  },
];
// const teams = [
//   { id: 1, name: "Heroicons", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", initial: "T", current: false },
//   { id: 3, name: "Workcation", initial: "W", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sidebar = () => {
  const { ["log"]: c } = console;

  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {}, [userRole]);

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col mt-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      pathname.includes(item.name)
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    {/* <item.icon
                      className={classNames(
                        pathname.includes(item.name)
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                      href={item.href}
                    > */}
                    <item.icon
                      className={classNames(
                        pathname.includes(item.name)
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <span
                      className={classNames(
                        team.current
                          ? "text-indigo-600 border-indigo-600"
                          : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                      )}
                    >
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li> */}
          {/* <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
