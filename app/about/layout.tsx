import StartCompaign from "@/components/home-components/start-compaign";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import ProfileNavbar from "@/components/shared/profile-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
<Navbar />
      {children}
      <StartCompaign />

      <Footer />
    </>
  );
}
