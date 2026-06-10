const decorPositions = {
  rightBottom: "right-[-1.5rem] bottom-0 w-[150px] xl:w-[180px]",
  leftBottom: "left-[-2rem] bottom-0 w-[145px] -scale-x-100 xl:w-[175px]",
  rightMiddle: "right-[-2rem] top-1/2 w-[145px] -translate-y-1/2 rotate-[-4deg] xl:w-[175px]",
  leftMiddle: "left-[-2rem] top-1/2 w-[140px] -translate-y-1/2 scale-x-[-1] rotate-[4deg] xl:w-[170px]",
  rightTop: "right-[-1.5rem] top-10 w-[135px] rotate-[3deg] xl:w-[165px]",
  leftTop: "left-[-1.5rem] top-10 w-[135px] scale-x-[-1] rotate-[-3deg] xl:w-[165px]",
};

type SectionDecorProps = {
  position: keyof typeof decorPositions;
  src?: string;
};

export function SectionDecor({ position, src = "/section-character.webp" }: SectionDecorProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 hidden select-none drop-shadow-[0_24px_42px_rgba(31,36,40,.16)] lg:block ${decorPositions[position]}`}
    />
  );
}
