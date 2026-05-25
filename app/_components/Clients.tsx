import Image from "next/image";

const clients = [
  { name: "Big Hound", logo: "/clients/big-hound.png" },
  { name: "Bucketeer", logo: "/clients/bucketeer.png" },
  { name: "Custom Maps", logo: "/clients/custom-maps.png" },
  { name: "Fightback", logo: "/clients/fightback.png" },
  { name: "Homeloan Quest", logo: "/clients/homeloan-quest.png" },
  { name: "Local Dentures", logo: "/clients/local-dentures.webp" },
  { name: "Mero Poster", logo: "/clients/mero-poster.png" },
  { name: "Mister Wallpaper", logo: "/clients/mister-wallpaper.png" },
  { name: "Pine Crest", logo: "/clients/pine-crest.png" },
  { name: "Reyas Care", logo: "/clients/reyas-care.png" },
  { name: "Storyworld", logo: "/clients/storyworld.png" },
  { name: "Webfriend", logo: "/clients/webfriend.png" },
];

export function ClientGrid() {
  return (
    <div
      className="border border-brand/60"
      style={{
        backgroundImage: `linear-gradient(45deg, var(--color-brand) 1px, transparent 2px)`,
        backgroundSize: "6px 6px",
      }}
    >
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3.5 p-4">
        {clients.map((client) => (
          <li
            key={client.name}
            className="flex items-center justify-center bg-black h-20 py-8"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={48}
              className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="work" className="px-margin-x mt-6 scroll-mt-30">
      <p className="text-center font-light uppercase text-sm tracking-widest text-white/90 mb-4">
        Proud to Work With
      </p>
      <ClientGrid />
    </section>
  );
}
