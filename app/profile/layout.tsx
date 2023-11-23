import Header from "@/components/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <Header />
      {children}
    </div>
  );
}
