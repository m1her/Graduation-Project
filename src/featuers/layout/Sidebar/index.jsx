"use client";
import { useState, useEffect } from "react";
import { Link } from "components";
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
import { useCurrentUser } from "Hooks";

const navigation = [
  { name: "Feeds", href: "/", icon: HomeIcon, current: false },
  { name: "Messages", href: "Messages", icon: EnvelopeIcon, current: false },
  { name: "Meetings", href: "Meetings", icon: VideoCameraIcon, current: false },
  { name: "Browse", href: "Browse", icon: GlobeAltIcon, current: false },

  {
    name: "Schedule",
    href: "Schedule",
    icon: CalendarDaysIcon,
    count: "20+",
    current: false,
  },
  { name: "Settings", href: "Settings", icon: Cog8ToothIcon, current: false },
  {
    name: "Support",
    href: "Support",
    icon: ClipboardDocumentIcon,
    current: false,
  },
];
const teams = [
  { id: 1, name: "Heroicons", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", initial: "T", current: false },
  { id: 3, name: "Workcation", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Sidebar = () => {
  const router = useRouter();
  const { userRole } = useCurrentUser();

  const newNavigation =
    userRole == "expert" && navigation.filter((item) => item.name !== "Browse");

  const pathname = usePathname();
  const [active, setActive] = useState(newNavigation);
  useEffect(() => {
    active.map((item) => {
      if (pathname.includes(item.name)) {
        setActive([...active, { ...item, current: true }]);
      }
    });
    console.log(active);
  }, [pathname]);

  useEffect(() => {}, [userRole]);

  // const handleSidBarNavigation = (name) => {
  //   if (name == "Feeds") {
  //     router.push("Home");
  //   } else if (name == "Meetings") {
  //     router.push("Meetings");
  //   } else if (name == "Messages") {
  //     router.push("Messages");
  //   } else if (name == "Browse") {
  //     router.push("Browse");
  //   } else if (name == "Support") {
  //     router.push("Support");
  //   } else if (name == "Settings") {
  //     router.push("Settings");
  //   } else if (name == "profile") {
  //     router.push("profile");
  //   }
  // };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col mt-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {newNavigation &&
                newNavigation.map((item) => (
                  <li
                    key={item.name}
                    // onClick={() => handleSidBarNavigation(item.name)}
                  >
                    <Link
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                      href={item.href}
                    >
                      <item.icon
                        className={classNames(
                          item.current
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
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
