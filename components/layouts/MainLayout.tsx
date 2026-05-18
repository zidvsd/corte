import Navbar from "./Navbar";
import Footer from "./Footer";
import PromoBar from "../PromoBar";
interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      {/* PromoBar (fixed but controlled) */}
      <PromoBar />

      {/* Navbar below promo bar */}
      <Navbar />

      {/* Push content below both bars */}
      <main className="w-full pt-24">{children}</main>

      <Footer />
    </div>
  );
}
