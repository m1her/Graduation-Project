import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-br from-white to-indigo-50 p-4 w-[49%]">
      <div
        id="title"
        className="text-indigo-900 text-3xl font-medium underline text-center "
      >
        Budgeting: How to create a budget and stick with it
      </div>
      <div id="content" className=" text-justify whitespace-pre-line">
        {`
      Making and sticking to a budget is a key step towards getting a handle on your debt and working towards a savings goal, of any kind. Let’s say you want to set money aside for emergencies or you aspire to save up for a much larger goal like a car, down payment on a house, or retirement. Until you get a realistic picture of how much money you’re bringing in and where it’s going, it’s difficult to know whether you’ll have enough left over to put away.
     
      Getting started can be the hardest part,especially if your finances feel out of control, but these easy-to-follow steps are designed to help you create a budget that really works for you.
      `}
      </div>
      <div className="w-full flex justify-end mt-[14px] h-5">
      <div className="flex w-fit justify-end items-center hover:border-b hover:border-black">
        <Link href="https://www.consumerfinance.gov/about-us/blog/budgeting-how-to-create-a-budget-and-stick-with-it/" 
        className="text-lg font-light mr-2 -mt-1"
        >More</Link>
        <ChevronRightIcon className="w-5 h-5" />
      </div>
      </div>
     
    </div>
  );
};
export default ArticleCard;
