import Image from "next/image";
import {
  ChevronRightIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    name: "What is the most recent life lesson you've learned?",
    email: "@leslie.lens",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    width: 256,
    height: 256,
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "If you could only listen to 3 songs for the rest of your life, which ones would they be?",
    email: "@example.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "If you were stranded on an island, who is the one person you would want to be stuck with you?",
    email: "@dyer84.eth",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: "3h ago",
  },
  {
    name: "What's the dumbest thing you've done recently?",
    email: "@lindsaywalton.lens",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    width: 256,
    height: 256,
    lastSeenDateTime: "2023-03-23T15:23Z",
  },
  {
    name: "If a movie was made about this group, what sort of characters do you think people would be?",
    email: "@courtneyhenry.lens",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    width: 256,
    height: 256,
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "What is your most treasured memory?",
    email: "@truthordare.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
  {
    name: "Tom Cook",
    email: "@tom.lens",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: null,
  },
];

export default function QuestionCard() {
  return (
    <ul role="list" className="divide-y divide-zinc-800">
      {people.map((person) => (
        <li
          key={person.email}
          className="relative flex justify-between gap-x-6 px-4 py-6 hover:bg-zinc-700/30 sm:px-6 lg:px-8"
        >
          <div className="flex min-w-0 gap-x-4">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.imageUrl}
              alt=""
              width={person.width}
              height={person.height}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-300">
                <a href={person.href}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {person.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a
                  href={`mailto:${person.email}`}
                  className="relative truncate hover:underline"
                >
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="flex flex-col sm:flex-row" id="">
                <div className="px-1" id="thumbs-up-icon">
                  <HandThumbUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-1 text-xs blur-sm">99</span>
                </div>
                <div className="px-1" id="thumbs-down-icon">
                  <HandThumbDownIcon className="h-5 w-5 text-gray-400" />
                  <span className="ml-1 text-xs blur-sm">28</span>
                </div>
              </div>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-3 text-gray-500">
                  Submitted{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
