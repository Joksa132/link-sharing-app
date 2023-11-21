import Header from "@/components/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <Header />
      {children}
    </div>
  );
}
