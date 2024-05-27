export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-10">
      {children}
    </div>
  );
}
