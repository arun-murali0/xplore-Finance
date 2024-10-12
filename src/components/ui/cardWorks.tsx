import { FC } from "react";

interface cardProp {
  title: String;
  content: String;
  className?: String;
  icon: any;
}

export const WorkCard: FC<cardProp> = ({ title, content, className, icon }) => {
  return (
    <section
      className={`max-w-fit h-[300px] p-7 ${className} bg-grey   rounded-xl shadow-md bg-card`}
    >
      <div className="border rounded-full bg-primary text-card w-10 h-10 flex justify-center items-center mx-auto mt-3">
        <div className="text-lg max-sm:text-md">{icon}</div>
      </div>
      <div
        className={`text-[17px] text-wrap mt-5 max-sm:text-center font-medium ${className} max-sm:text-md`}
      >
        {title}
      </div>
      <div
        className={`text-muted-foreground text-[15px] max-sm:text-sm text-center leading-5 ${className}  my-2`}
      >
        {content}
      </div>
    </section>
  );
};
