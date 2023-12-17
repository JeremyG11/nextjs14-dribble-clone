import { Source_Serif_4 } from "next/font/google";

const font = Source_Serif_4({
  subsets: ["greek"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

interface BadgeProps {
  text: string;
  className: string;
}
export default function Badge({ text, className }: BadgeProps) {
  return (
    <div>
      <span
        className={`${font.className} ${className} mx-auto px-4 font-medium whitespace-nowrap rounded-full `}
      >
        {text}
      </span>
    </div>
  );
}
