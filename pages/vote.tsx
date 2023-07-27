import TopNav from "@/components/layout/TopNav";
import BottomNav from "@/components/layout/BottomNav";

export default function Vote() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopNav />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Vote
        </h1>
      </div>
      <BottomNav />
    </main>
  );
}
