import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Clients from "./_components/Clients";
import Services from "./_components/Services";
import Team from "./_components/Team";
import Numbers from "./_components/Numbers";
import WorkSlider from "./_components/WorkSlider";
import Testimonials from "./_components/Testimonials";
import Approach from "./_components/Approach";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
// import RevealController from "./_components/RevealController";
// import CountController from "./_components/CountController";

export default function Page() {
  return (
    <>
      {/* <RevealController /> */}
      {/* <CountController /> */}
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Team />
        {/* <Numbers />
        <WorkSlider />
        <Testimonials />
        <Approach />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
