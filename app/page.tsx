import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import MotionWrapper from "@/components/MotionWrapper";
export default function Home() {
  return (
    <div>
      <MotionWrapper>
        <Hero />
      </MotionWrapper>

      <MotionWrapper>
        <Services />
      </MotionWrapper>

      <MotionWrapper>
        <Products />
      </MotionWrapper>

      <MotionWrapper>
        <Gallery />
      </MotionWrapper>

      <MotionWrapper>
        <Testimonials />
      </MotionWrapper>

      <MotionWrapper>
        <Location />
      </MotionWrapper>
    </div>
  );
}
