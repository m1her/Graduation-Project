"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Card } from "components";
import Rating from "components/Rating";

const CategoryExpertList = () => {
  return (
    <Card className="!p-0 w-[49%]">
      <div className="p-4 border-b text-lg font-semibold">
        Top Finance Experts
      </div>
      <div>
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="bg-gray-300 w-14 h-14 rounded-full mr-2"></div>
            <div>
              <div className="font-medium">User Name</div>
              <Rating rating={4} />
            </div>
          </div>
          <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="bg-gray-300 w-14 h-14 rounded-full mr-2"></div>
            <div>
              <div className="font-medium">User Name</div>
              <Rating rating={4} />
            </div>
          </div>
          <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="bg-gray-300 w-14 h-14 rounded-full mr-2"></div>
            <div>
              <div className="font-medium">User Name</div>
              <Rating rating={4} />
            </div>
          </div>
          <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="bg-gray-300 w-14 h-14 rounded-full mr-2"></div>
            <div>
              <div className="font-medium">User Name</div>
              <Rating rating={4} />
            </div>
          </div>
          <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="bg-gray-300 w-14 h-14 rounded-full mr-2"></div>
            <div>
              <div className="font-medium">User Name</div>
              <Rating rating={4} />
            </div>
          </div>
          <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CategoryExpertList;
