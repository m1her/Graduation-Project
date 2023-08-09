import { VideoCameraIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const CategoryBarCard = ({ text, bg }) => {
  console.log(text);

  return (
    <div className="w-full relative shadow rounded-lg p-4">
      <Image
        src={bg}
        alt=" "
        fill
        className="object-cover object-center -z-10 rounded-lg"
      />
      <div className="bg-[#ffffffe7] w-1/2 rounded-lg p-5 h-[350px] flex flex-col justify-between">
        <div className="text-4xl font-semibold text-justify">{text}</div>
        <div className="w-full flex justify-start mt-20">
          <Link
            href="/web/Browse"
            className="text-white text-lg font-semibold bg-indigo-700 hover:bg-indigo-800 px-3 py-2 flex items-center rounded-lg"
          >
            <VideoCameraIcon className="text-white w-5 h-5 mr-2" /> Meet Expert
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CategoryBarCard;
