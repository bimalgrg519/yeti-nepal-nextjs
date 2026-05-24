import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Clients from "./_components/Clients";
import Services from "./_components/Services";
import Team from "./_components/Team";
import Careers from "./_components/Careers";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <Team />
      <Careers />
    </main>
  );
}
