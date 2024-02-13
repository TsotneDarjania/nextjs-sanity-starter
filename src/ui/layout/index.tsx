import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={"min-h-[100vh] relative px-4 py-2 " + className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
