import { Card } from "components";
import Image from "next/image";

const ChatBox = () => {
    return <Card className="aspect-square">
<div className="flex w-full items-center border-b p-2 -m-4">
    <div className="w-14 h-14 rounded-full bg-gray-200 mr-2">

    </div>
    <div className="text-lg font-semibold">User Name</div>
</div>
    </Card>
}
export default ChatBox;