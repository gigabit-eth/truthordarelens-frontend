import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function TopNav() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 w-full items-center justify-between py-4 px-4 font-mono text-sm lg:flex bg-zinc-900">
      <p className="fixed left-0 top-0 flex w-full justify-start px-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        truthordare.lens
      </p>
      <div className="bottom-0 left-0 flex items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black static h-auto w-auto lg:bg-none my-2 lg:my-0">
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          label="Sign In"
        />
      </div>
    </div>
  );
}
