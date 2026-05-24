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

export default function Clients() {
  return (
    <section id="work" className="px-margin-x mt-6 scroll-mt-30">
      <p className="text-center font-light uppercase text-sm tracking-[0.1em] text-white/90 mb-4">
        Proud to Work With
      </p>
      <div
        style={{
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBvcGFjaXR5PScwLjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMC43NScgY3k9JzAuNzUnIHI9JzAuNzUnIGZpbGw9JyNmZmZmZmYnLz48L3N2Zz4=")',
          backgroundRepeat: "repeat",
        }}
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-[6.5px] p-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex items-center justify-center bg-black h-[5rem] py-8"
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
    </section>
  );
}
