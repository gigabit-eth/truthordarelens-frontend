import { ConnectKitButton } from "connectkit";

export default function TopNav() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 w-full items-center justify-between py-4 px-4 font-mono text-sm lg:flex bg-[#FDEED8] dark:bg-[#0D1321]">
      <p
        className="fixed left-0 top-0 flex w-full justify-start px-4 
        bg-gradient-to-t from-[#FDEED8] pb-6 pt-8 backdrop-blur-2xl border-[#5E503F] 
        dark:border-neutral-800 dark:bg-[#0D1321] dark:from-inherit 
        lg:static lg:w-auto lg:bg-[#FDEED8] lg:p-4 
        lg:dark:bg-[#0D1321]"
      >
        truthordare.lol
      </p>
      <div className="bottom-0 left-0 flex items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black static h-auto w-auto lg:bg-none my-2 lg:my-0">
        <ConnectKitButton />
      </div>
    </div>
  );
}
