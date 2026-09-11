import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />

          <div className="flex flex-col w-screen overflow-y-auto">
            <Header />

            <main className="p-6 bg-[#FAFAFC] h-screen flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}