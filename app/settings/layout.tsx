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
    <ProfileNavbar />
        {children}
        <Footer />
    </>
     
  );
}
