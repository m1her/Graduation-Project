"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const Dayes = [
  { name: "Satrday" },
  { name: "Sunday" },
  { name: "Monday" },
  { name: "Tusday" },
  { name: "Wensday" },
  { name: "Thursday" },
  { name: "Friday" },
];

//  requiredExpertData = { requiredExpertData };
//  setRequiredExpertData = { setRequiredExpertData };
export function SelectDay({ requiredExpertData, setRequiredExpertData }) {
  const [selectedDays, setSelectedDays] = useState([]);
  console.log(selectedDays);

  useEffect(() => {
    setRequiredExpertData({
      ...requiredExpertData,
      daysOfWork: selectedDays,
    });
  }, [selectedDays]);

  return (
    <div className="w-[48%] h-full">
      <div className="">
        <p className="text-gray-dark">Working Dayes</p>
        <Listbox value={selectedDays} onChange={setSelectedDays} multiple>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full h-[55px] cursor-default rounded-lg  py-2 pl-3 pr-10 text-left border border-gray focus:ring-0 focus:border-blue-400   focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
              <span className="block whitespace-normal ">
                {selectedDays.length > 3
                  ? selectedDays.slice(0, 3).join(",") + "..."
                  : selectedDays.join(",")}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded-md text-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Dayes.map((day) => (
                  <Listbox.Option
                    key={day}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                    value={day.name}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {day.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
export default SelectDay;
