import SectionItemMain from "../conversationDetail/SectionItemMain";
import SectionItemIcons from "../conversationDetail/SectionItemIcons";
import SectionItemAttachments from "../conversationDetail/SectionItemAttachments";

export default function ConversationDetail() {
  return (
    <div className="hidden flex-col 2xl:flex 2xl:w-[420px] bg-green-800 text-white h-full">
      <div className="bg-red-500 h-[80px] w-full items-center justify-center flex">
        <p className="page-heading">Thông tin</p>
      </div>
      <div className="flex-1 overflow-auto space-y-3">
        <SectionItemMain />
        <SectionItemIcons />
        <SectionItemAttachments />
        <SectionItemAttachments />
        <SectionItemAttachments />
        <SectionItemIcons />
      </div>
    </div>
  );
}
