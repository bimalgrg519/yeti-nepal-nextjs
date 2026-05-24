import Image from "next/image";

const team = [
  { name: "Bimal", designation: "Founder & CEO", image: "/team/bimal.png" },
  {
    name: "Ashim",
    designation: "Full Stack Engineer",
    image: "/team/ashim.png",
  },
  { name: "Joel", designation: "Associate Developer", image: "/team/joel.png" },
  {
    name: "Manoj",
    designation: "DevOps Engineer",
    image: "/team/manoj.png",
  },
  {
    name: "Sandesh",
    designation: "Mobile Engineer",
    image: "/team/sandesh.png",
  },
  {
    name: "Akrity",
    designation: "SEO Specialist",
    image: "/team/akrity.png",
  },
  { name: "Manika", designation: "UI/UX Designer", image: "/team/manika.jpg" },
  {
    name: "Samipab",
    designation: "Frontend Developer",
    image: "/team/samipab.jpeg",
  },
  { name: "Sushma", designation: "SEO Specialist", image: "/team/sushma.JPG" },
  {
    name: "Utsab",
    designation: "Full Stack Engineer",
    image: "/team/utsab.JPG",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Team() {
  return (
    <section className="px-margin-x py-24 bg-[#0b0b0b]">
      <div className="max-w-[1920px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-light text-white leading-none tracking-tight">
            Meet our amazing community.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-px bg-white/[0.08] p-px">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative aspect-square overflow-hidden group cursor-pointer border-b-2"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-all duration-300 scale-105 group-hover:scale-100"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />

              <div className="absolute inset-0 bg-black/55 transition-opacity duration-500 group-hover:opacity-0" />

              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-1 right-1 flex flex-col text-right">
                <span className="text-white text-lg uppercase font-bold tracking-wide leading-5">
                  {member.name}
                </span>
                <span className="text-white/80 text-[10px] font-normal uppercase">
                  {member.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
