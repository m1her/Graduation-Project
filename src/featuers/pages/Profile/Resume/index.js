import { PencilIcon } from "lib";
import { Card } from "components";

const Resume = () => {
  return (
    <Card className="my-4 rounded-sm w-[580px] relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">Resume</p>
        <PencilIcon className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer" />
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>
      <div className="whitespace-pre-wrap ml-0">
        {`studied at ---------


experience

worked at -----------
2019 - 2022

worked at -----------
2019 - 2022

worked at -----------
2019 - 2022

worked at -----------
2019 - 2022
`}
      </div>
    </Card>
  );
};
export default Resume;
