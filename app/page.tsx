import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Products />
      <Gallery />
      <Testimonials />
      <Location />
    </div>
  );
}
