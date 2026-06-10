const decorPositions = {
  rightBottom: "right-[-2rem] bottom-0 w-[190px] xl:w-[245px]",
  leftBottom: "left-[-2.5rem] bottom-0 w-[180px] -scale-x-100 xl:w-[230px]",
  rightMiddle: "right-[-3rem] top-1/2 w-[175px] -translate-y-1/2 rotate-[-4deg] xl:w-[225px]",
  leftMiddle: "left-[-3rem] top-1/2 w-[170px] -translate-y-1/2 scale-x-[-1] rotate-[4deg] xl:w-[220px]",
  rightTop: "right-[-2rem] top-10 w-[160px] rotate-[3deg] xl:w-[210px]",
  leftTop: "left-[-2rem] top-10 w-[160px] scale-x-[-1] rotate-[-3deg] xl:w-[210px]",
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
