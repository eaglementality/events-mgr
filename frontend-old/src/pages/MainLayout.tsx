import Header from "../Components/Layouts/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />
      <section className="flex flex-col pt-[5%] bg-hero w-screen h-screen items-center"> 
        {children} 
      </section>
    </main>
  );
}
