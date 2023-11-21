export default function ProfileDetails() {
  return (
    <main className="grid grid-cols-links gap-5 py-5">
      <section className="bg-white rounded-lg h-full"></section>
      <section className="bg-white rounded-lg h-full px-8 py-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Profile details</h2>
        <span className="text-sm font-medium opacity-50">
          Add your details to create a personal touch to your profile.
        </span>
      </section>
    </main>
  );
}
