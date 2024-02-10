export function SectionBoundary({ children }: { children: React.ReactNode }) {
  return (
    <section className=" min-h-20 flex justify-center items-center ">
      {children}
    </section>
  );
}
