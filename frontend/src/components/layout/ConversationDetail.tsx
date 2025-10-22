import SectionItemMain from "../conversationDetail/SectionItemMain";
import SectionItemIcons from "../conversationDetail/SectionItemIcons";
import SectionItemAttachments from "../conversationDetail/SectionItemAttachments";
import { Trash } from "lucide-react";

export default function ConversationDetail() {
  return (
    <div className="hidden flex-col 2xl:flex 2xl:w-[420px] text-white h-full bg-card">
      <div className=" bg-gray-800 h-[80px] w-full items-center justify-center flex border-b border-l">
        <p className="page-heading">Thông tin</p>
      </div>
      <div className="flex-1 overflow-auto space-y-3">
        <SectionItemMain />
        <SectionItemIcons icon= {Trash}/>
        <SectionItemAttachments type="image/video" />
        <SectionItemAttachments type="file" />
        <SectionItemAttachments type="link" />
        <SectionItemIcons icon={Trash} />
      </div>
    </div>
  );
}
