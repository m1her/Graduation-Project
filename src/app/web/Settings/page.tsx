/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";
import Image from "next/image";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Jobs", href: "#", icon: BriefcaseIcon, current: false },
  {
    name: "Applications",
    href: "#",
    icon: DocumentMagnifyingGlassIcon,
    current: false,
  },
  {
    name: "Messages",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    current: false,
  },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: true },
];
const secondaryNavigation = [
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon },
];
const tabs = [
  { name: "General", href: "#", current: true },
  // { name: "Password", href: "#", current: false },
  // { name: "Notifications", href: "#", current: false },
  // { name: "Plan", href: "#", current: false },
  // { name: "Billing", href: "#", current: false },
  // { name: "Team Members", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

  return (
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="w-[80%] flex ">
        {/* Static sidebar for desktop */}

        {/* Content area */}
        <div className=" w-full">
          <div className="">
            <div className=" flex flex-col ">
              <main className="flex-1">
                <div className="relative ml-8 mr-32">
                  <div className="pb-16 pt-10">
                    <div className="px-4 sm:px-6 lg:px-0">
                      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Settings
                      </h1>
                    </div>
                    <div className="px-4 sm:px-6 lg:px-0">
                      <div className="py-6">
                        {/* Tabs */}
                        <div className="lg:hidden">
                          <label htmlFor="selected-tab" className="sr-only">
                            Select a tab
                          </label>
                          <select
                            id="selected-tab"
                            name="selected-tab"
                            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                            defaultValue={tabs.find((tab) => tab.current).name}
                          >
                            {tabs.map((tab) => (
                              <option key={tab.name}>{tab.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="hidden lg:block">
                          <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                              {tabs.map((tab) => (
                                <a
                                  key={tab.name}
                                  href={tab.href}
                                  className={classNames(
                                    tab.current
                                      ? "border-purple-500 text-purple-600"
                                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                                  )}
                                >
                                  {tab.name}
                                </a>
                              ))}
                            </nav>
                          </div>
                        </div>

                        {/* Description list with inline editing */}
                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Profile
                            </h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
                          </div>
                          <div className="mt-6">
                            <dl className="divide-y divide-gray-200">
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Name
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">
                                    Chelsea Hagon
                                  </span>
                                  <span className="ml-4 flex-shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Photo
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">
                                    <Image

                                    width={500}
                                    height={500}


                                      className="h-8 w-8 rounded-full"
                                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </span>
                                  <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                    <span
                                      className="text-gray-300"
                                      aria-hidden="true"
                                    >
                                      |
                                    </span>
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Email
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">
                                    chelsea.hagon@example.com
                                  </span>
                                  <span className="ml-4 flex-shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Job title
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">
                                    Human Resources Manager
                                  </span>
                                  <span className="ml-4 flex-shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Account
                            </h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                              Manage how information is displayed on your
                              account.
                            </p>
                          </div>
                          <div className="mt-6">
                            <dl className="divide-y divide-gray-200">
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Language
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">English</span>
                                  <span className="ml-4 flex-shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">
                                  Date format
                                </dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">DD-MM-YYYY</span>
                                  <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                    <span
                                      className="text-gray-300"
                                      aria-hidden="true"
                                    >
                                      |
                                    </span>
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <Switch.Group
                                as="div"
                                className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
                              >
                                <Switch.Label
                                  as="dt"
                                  className="text-sm font-medium text-gray-500"
                                  passive
                                >
                                  Automatic timezone
                                </Switch.Label>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <Switch
                                    checked={automaticTimezoneEnabled}
                                    onChange={setAutomaticTimezoneEnabled}
                                    className={classNames(
                                      automaticTimezoneEnabled
                                        ? "bg-purple-600"
                                        : "bg-gray-200",
                                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                                    )}
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        automaticTimezoneEnabled
                                          ? "translate-x-5"
                                          : "translate-x-0",
                                        "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                      )}
                                    />
                                  </Switch>
                                </dd>
                              </Switch.Group>
                              <Switch.Group
                                as="div"
                                className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
                              >
                                <Switch.Label
                                  as="dt"
                                  className="text-sm font-medium text-gray-500"
                                  passive
                                >
                                  Auto-update applicant data
                                </Switch.Label>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                      autoUpdateApplicantDataEnabled
                                        ? "bg-purple-600"
                                        : "bg-gray-200",
                                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                                    )}
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        autoUpdateApplicantDataEnabled
                                          ? "translate-x-5"
                                          : "translate-x-0",
                                        "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                      )}
                                    />
                                  </Switch>
                                </dd>
                              </Switch.Group>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
