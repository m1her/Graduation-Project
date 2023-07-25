import { Card } from "components";
import ChatUserCard from "../ChatUserCard";

const UsersChats = () => {
  return (
    <Card className="w-full !p-0">
      <div className="flex w-full items-center border-b p-2 ">Chats</div>
      <ChatUserCard />
      <ChatUserCard />
      <ChatUserCard />
      <ChatUserCard />
      <ChatUserCard />
      <ChatUserCard />
    </Card>
  );
};
export default UsersChats;
