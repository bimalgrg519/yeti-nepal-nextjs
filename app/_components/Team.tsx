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
    <section className="px-margin-x bg-[#0b0b0b] py-12 md:py-24">
      <div className="max-w-[1920px]">
        <div className="mb-16">
          <h2 className="text-5xl leading-none font-light tracking-tight text-white md:text-7xl">
            Meet our amazing community.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/[0.08] p-px min-[600px]:grid-cols-3 min-[900px]:grid-cols-5 min-[1100px]:grid-cols-6 min-[1300px]:grid-cols-8 min-[1500px]:grid-cols-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative aspect-square cursor-pointer overflow-hidden border-b-2"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="scale-105 object-cover object-top transition-all duration-300 group-hover:scale-100"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />

              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0 sm:bg-black/70" />

              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute right-1 bottom-1 flex flex-col text-right">
                <span className="text-lg leading-5 font-bold tracking-wide text-white uppercase">
                  {member.name}
                </span>
                <span className="text-[10px] font-normal text-white/80 uppercase">
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
