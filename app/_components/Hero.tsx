import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  "Airbnb",
  "Shopify",
  "Linear",
  "Vercel",
  "Notion",
  "Stripe",
  "Figma",
  "Atlassian",
  "Slack",
  "GitHub",
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col">
      <MuxPlayer
        src="https://stream.mux.com/QegJZC2TTrWYc9ugth7eek1cgILqpv016nvVZFLJDRUk.m3u8?max_resolution=1080p&min_resolution=720p&redundant_streams=true"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          "--media-object-fit": "cover",
          "--media-object-position": "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="flex-1 flex flex-col justify-center items-start px-margin-x relative z-10">
        <div className="flex flex-col">
          <div>
            <h1 className="reveal text-[60px] md:text-[96px] lg:text-[112px] leading-none">
              Built in the Himalayas.
            </h1>
            <h1 className="reveal text-[60px] md:text-[96px] lg:text-[112px] leading-none">
              Delivered globally.
            </h1>
          </div>
          <p
            className="reveal w-fit pt-12 text-body-xl max-w-[36ch]"
            style={{ transitionDelay: ".05s" }}
          >
            Helping businesses grow with clean design, fast websites, and
            scalable digital solutions.
          </p>
          <div
            className="flex gap-2 flex-wrap reveal mt-6"
            style={{ transitionDelay: ".1s" }}
          >
            <Link
              href="#services"
              className="btn btn-primary text-2xl px-6 py-3 font-light"
            >
              See what we do <span>›</span>
            </Link>
            <Link
              href="#work"
              className="btn btn-outline text-2xl px-6 py-3 font-light"
            >
              Browse our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  // return (
  //   <section className="relative flex flex-col overflow-hidden min-h-screen">
  //     <div className="flex-1 flex flex-col justify-center items-start px-margin-x relative z-10">
  //       <div className="flex flex-col">
  //         <div>
  //           <h1 className="reveal">Built in the Himalayas.</h1>
  //           <h1 className="reveal">Delivered globally.</h1>
  //         </div>
  //         <p
  //           className="mt-4 text-2xl leading-[1.16] font-normal tracking-[-0.005em] reveal"
  //           style={{ transitionDelay: ".05s" }}
  //         >
  //           Built to scale with your business.
  //         </p>
  //         <div
  //           className="flex gap-2 flex-wrap reveal mt-6"
  //           style={{ transitionDelay: ".1s" }}
  //         >
  //           <Link
  //             href="#services"
  //             className="btn btn-primary text-2xl px-6 py-3 font-light"
  //           >
  //             See what we do <span>›</span>
  //           </Link>
  //           <Link
  //             href="#work"
  //             className="btn btn-outline text-2xl px-6 py-3 font-light"
  //           >
  //             Browse our work
  //           </Link>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="relative z-10 bg-primary text-white">
  //       <div className="overflow-hidden flex-1 flex items-center">
  //         <div
  //           className="flex items-center will-change-transform"
  //           style={{ animation: "marquee 28s linear infinite" }}
  //         >
  //           {[...brands, ...brands].map((brand, i) => (
  //             <span
  //               key={i}
  //               className="shrink-0 px-8 py-6 text-lg font-semibold tracking-tight hover:opacity-100 transition-opacity duration-200 whitespace-nowrap select-none"
  //             >
  //               {brand}
  //             </span>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
