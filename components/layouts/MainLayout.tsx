import Navbar from "./Navbar";
import Footer from "./Footer";
import PromoBar from "../PromoBar";
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      <PromoBar />
      <Navbar />

      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
