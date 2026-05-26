const services = [
  {
    id: "01",
    category: "Website",
    // tagline: "Pixels with a plan.",
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
    // tagline: "In every pocket, on every screen.",
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
    // tagline: "Found first. Always.",
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
    <section id="services" className="bg-[#0b0b0b] py-12 md:py-24">
      <div className="px-margin-x">
        <div className="mb-16 flex max-w-[1920px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-5xl leading-none font-light tracking-tight text-white md:text-7xl">
              What we build.
            </h2>
          </div>
          <p className="max-w-[30ch] text-sm leading-relaxed text-white/80 md:text-right md:text-lg">
            Three skills. One team. Focused on helping your business grow.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 gap-px bg-white/[0.08] p-px min-[960px]:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative p-6 min-[1000px]:p-12 min-[1250px]:p-20 ${index === 1 ? "bg-brand" : "bg-gray-500/10"} `}
            >
              <div className="mb-1 flex w-fit gap-4 bg-black px-4 py-2">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {service.category}
                </h3>
                {/* <p className="mt-1.5 text-sm text-white/35 italic">
                  {service.tagline}
                </p> */}
              </div>
              <div className="bg-black p-8">
                <span
                  className="pointer-events-none absolute top-4 right-6 text-[7rem] leading-none font-bold text-white/[0.03] transition-colors duration-500 select-none group-hover:text-white/[0.05]"
                  aria-hidden="true"
                >
                  {service.id}
                </span>

                <div className="mb-8 h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-full" />

                <ul className="flex flex-col gap-2">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <span className="bg-[#212121] px-3 py-1 text-xs font-light tracking-tight text-white/90 uppercase">
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
