import Link from "next/link";

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <>
      <Link href="/">
        <button
          type="button"
          className="rounded-md bg-[#FDF2D8] dark:bg-gray-800 border-[#C6AC8F] dark:border-gray-600 border px-2.5 py-1.5 text-sm font-semibold text-[#5E503F] dark:text-[#FDF2D8] shadow-sm hover:bg-white/20"
        >
          Back
        </button>
      </Link>
    </>
  );
};

export default Button;
