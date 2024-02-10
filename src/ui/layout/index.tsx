import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-[100vh] relative px-4 py-2">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
