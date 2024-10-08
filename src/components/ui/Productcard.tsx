import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Button } from "./button";
import { Badge } from "./badge";
interface cardProp {
  title: String;
  content: String;
  className?: String;
  img: StaticImageData;
}

export const Card: FC<cardProp> = ({ title, content, className, img }) => {
  return (
    <section
      className={`${className} max-h-fit max-w-full border border-muted-foreground rounded-lg`}
    >
      <Image
        src={img}
        alt="card-image"
        className="bg-cover h-[200px] w-[250px] rounded-lg p-[3px]"
      />
      <div className="px-4 mt-4">
        <div
          className={`text-[14px] font-medium text-muted-foreground mb-3 text-wrap w-58 ${className}`}
        >
          {title}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-muted-foreground text-xs my-3">{content}</div>
          <Badge variant={"secondary"} className="text-muted-foreground">
            English / Tamil
          </Badge>
        </div>
        <div className="flex justify-between items-center mb-5">
          <p className="text-muted-foreground text-sm">total no .of buy</p>
          <p className="text-muted-foreground text-sm">total duration</p>
        </div>
      </div>
    </section>
  );
};
