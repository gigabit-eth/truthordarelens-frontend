export default function SearchBar() {
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-0 px-4 py-1.5 bg-zinc-900 text-gray-600 shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-600 focus:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
