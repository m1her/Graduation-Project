const ChatUserCard = () => {
  return (
    <div className="flex items-center p-2 justify-between border-b hover:bg-gray-50 cursor-pointer">
      <div className=" flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-2"></div>
        <div className="text-lg font-light">User Name</div>
      </div>
      <div className="w-5 h-5 rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center p-2">1</div>
    </div>
  );
};
export default ChatUserCard;
