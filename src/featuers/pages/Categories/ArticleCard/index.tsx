import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-br from-white to-indigo-50 p-4 w-[49%]">
      <div
        id="title"
        className="text-indigo-900 text-3xl font-medium underline text-center "
      >
        {article.title}
      </div>
      <div id="content" className=" text-justify whitespace-pre-line mt-4">
        {article.text}
      </div>
      <div className="w-full flex justify-end mt-[14px] h-5">
        <div className="flex w-fit justify-end items-center hover:border-b hover:border-black">
          <Link href={article.link} className="text-lg font-light mr-2 -mt-1">
            More
          </Link>
          <ChevronRightIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
