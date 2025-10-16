import { LucideIcon} from "lucide-react";

export default function SectionItemIcons({icon : Icon} : {icon: LucideIcon}) {
  return <div className="bg-blue-500 w-full h-[300px] flex flex-col">
    <Icon />
  </div>;
}
