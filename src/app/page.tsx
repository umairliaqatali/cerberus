import Image from "next/image";
import Hero from '../components/Hero';
import CrossPlatform from '../components/CrossPlatform';
import SupportedCoins from '../components/SupportedCoins';
import Products from '../components/Products';
import AboutUs from '../components/AboutUs';
import Synchronize from '../components/Synchronize';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';


export default function Home() {
  return (
    <div>
      <Hero />
      <CrossPlatform />
      <SupportedCoins />
      <Products />
      <AboutUs />
      <Synchronize />
      <FAQ />
      <Newsletter />
    </div>
  );
}
