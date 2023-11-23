export default function ProfileDetails() {
  return (
    <main className="grid grid-cols-links gap-5 py-5">
      <section className="bg-white rounded-lg h-full"></section>
      <section className="bg-white rounded-lg h-full px-8 py-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Profile details</h2>
        <span className="text-sm font-medium opacity-50">
          Add your details to create a personal touch to your profile.
        </span>
        <form className="flex flex-col gap-4 bg-[#FAFAFA] px-4 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <label
              htmlFor="first-name"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              First name*
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="last-name"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              Last name*
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-sm font-medium opacity-50 w-28 mr-20"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-2 border border-gray-400 rounded-lg outline-none border-opacity-60 w-full"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
