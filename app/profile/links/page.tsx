import { FaPlus } from "react-icons/fa";

export default function ProfileLinks() {
  return (
    <main className="grid grid-cols-links gap-5 py-5">
      <section className="bg-white rounded-lg h-full">abc</section>
      <section className="bg-white rounded-lg h-full px-8 py-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Customize your links</h2>
        <span className="text-sm font-medium opacity-50">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </span>
        <button className="flex justify-center items-center gap-1 py-2 px-6 border-[2px] border-violet-500 rounded-lg text-violet-500 font-semibold text-sm mt-6">
          <FaPlus size={10} /> Add new link
        </button>
      </section>
    </main>
  );
}
