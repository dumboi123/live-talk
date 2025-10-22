import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";


const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

export default function SectionItemAttachments({ type }: { type: string }) {
  return (
    <div className="bg-gray-800 w-full flex flex-col h-fit py-4 gap-3">
      <p className="section-header px-4">{type}</p>
      <ItemGroup className="gap-1 w-full">
        {music.map((song) => (
          <Item
            key={song.title}
            variant="default"
            asChild
            role="listitem"
            className="relative w-full overflow-hidden"
          >
            <a
              href="#"
              className="px-4"
            >
              <ItemMedia variant="filelink">
                <Image
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width={40}
                  height={40}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">{song.title}</ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
      <Button variant="default" className="mx-4">Xem tất cả</Button>
    </div>
  );
}
