import Footer from "@/components/shared/footer";
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
