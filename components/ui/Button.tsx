import Link from "next/link";

export default function Button() {
  return (
    <>
      <Link href="/">
        <button
          type="button"
          className="rounded-md bg-zinc-800/30 px-2.5 py-1.5 text-sm font-semibold text-white/30 shadow-sm hover:bg-white/20"
        >
          Back
        </button>
      </Link>
    </>
  );
}
