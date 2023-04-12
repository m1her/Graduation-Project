import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#a5b4fc]">
        <Navigation />
        <Sidebar />
        {children}</body>
    </html>
  );
}
