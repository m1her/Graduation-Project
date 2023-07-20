const Support = () => {
  return (
    <div className="w-[80%] ">
      <div className=" top-0 left-0 w-full bg-gray-50 py-28">
        <div className="text-5xl font-thin text-gray-600 ml-16">
          Leap Start Support
        </div>
      </div>

      <div className="flex items-center justify-between p-16">
        <div className="text-xl text-center h-[140px] w-[280px] flex justify-center items-center bg-white shadow rounded-lg hover:shadow-gray-500 cursor-pointer">
          I want to learn...
        </div>
        <div className="text-xl text-center h-[140px] w-[280px] flex justify-center items-center bg-white shadow rounded-lg hover:shadow-gray-500 cursor-pointer">
          I&apos;m having trouble with...
        </div>
        <div className="text-xl text-center h-[140px] w-[280px] flex justify-center items-center bg-white shadow rounded-lg hover:shadow-gray-500 cursor-pointer">
          I have a question...
        </div>
      </div>

      <div className="text-4xl font-thin text-gray-600 text-center ">
        Contact Us
      </div>

      <div className="flex justify-center items-center my-10 ">
        <div className="md:w-[565px] w-[400px] md:h-12 h-10 rounded-lg p-1 flex justify-between items-center bg-white">
          <input
            type="email"
            placeholder="Enter message"
            className="h-full md:w-[405px] w-[267px] focus:outline-none md:text-lg text-sm font-sofia font-light pl-6 placeholder:font-sofia placeholder:font-thin placeholder:text-base"
          />
          <button
            className="flex justify-center items-center md:text-base text-xs text-white font-sofia font-normal bg-indigo-600 hover:bg-indigo-700 rounded-[5px] md:w-32 w-24 md:h-10 h-8"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Support;
