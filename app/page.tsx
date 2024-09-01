import Navbar from "@/components/navbar";
import LandingPageCard from '@/components/LandingPageCard';
import TwoCardsComponent from '@/components/TwoCardsComponent';
import { Services } from "@/components/Services";

import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <LandingPageCard />
      <TwoCardsComponent />
      <Services/>
      <div>
      <Footer/>
      </div>
    </main>
  );
}
