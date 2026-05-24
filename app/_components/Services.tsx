const services = [
  {
    id: "01",
    category: "Website",
    tagline: "Pixels with a plan.",
    items: [
      "eCommerce Platforms",
      "CMS & Headless CMS",
      "Web Applications",
      "Speed & Performance",
    ],
  },
  {
    id: "02",
    category: "Mobile Apps",
    tagline: "In every pocket, on every screen.",
    items: [
      "iOS & Android Native",
      "Cross-platform Development",
      "App Store Publishing",
      "Push & Real-time Updates",
    ],
  },
  {
    id: "03",
    category: "SEO",
    tagline: "Found first. Always.",
    items: [
      "Technical SEO Audits",
      "Content Architecture",
      "Keyword Intelligence",
      "Analytics & Insights",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-margin-x py-24 bg-[#0b0b0b]">
      <div className="max-w-[1920px]">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-7xl font-light text-white leading-none tracking-tight">
              What we build.
            </h2>
          </div>
          <p className="text-sm md:text-lg text-white/80 max-w-[40ch] leading-relaxed md:text-right">
            Three disciplines. One team. Relentlessly focused on what moves your
            business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] p-px">
          {services.map((service, index) => (
            <div
              key={service.id}
              // className="relative bg-[#0b0b0b] p-8 md:p-20 group overflow-hidden hover:bg-[#0f0f0f] transition-colors duration-500"
              className={`relative p-8 md:p-20
              ${index === 1 ? "bg-brand" : "bg-gray-500/10"}
                `}
            >
              <div className="px-4 py-2 bg-black mb-1 flex w-fit gap-4">
                <h3 className="text-xl font-medium text-white tracking-tight">
                  {service.category}
                </h3>
                <p className="text-sm text-white/35 mt-1.5 italic">
                  {service.tagline}
                </p>
              </div>
              <div className="p-8 bg-black">
                <span
                  className="absolute top-4 right-6 text-[7rem] font-bold leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500"
                  aria-hidden="true"
                >
                  {service.id}
                </span>

                <div className="w-8 h-px bg-white/20 mb-8 group-hover:w-full transition-all duration-500" />

                <ul className="flex flex-col gap-2">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <span className="text-xs px-3 py-1 font-light text-white/90 uppercase bg-[#212121] tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
