import Container from "@/global/container";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "./button";

interface cardProp {
  className?: String;
  title: String;
  content: any;
}

export const ExapandableCard: FC<cardProp> = ({
  title,
  content,
  className,
}) => {
  return (
    <div>
      <Container>
        <div className="p-2">
          <div
            className={cn("text-primary-foreground text-md my-1", className)}
          >
            {title}
          </div>
          <div
            className={cn(
              "leading-7 text-[14px] text-muted-foreground",
              className
            )}
          >
            <div
              className={cn(
                "text-left my-3 text-[15px] text-primary-foreground"
              )}
            >
              What you will learn:
            </div>
            <div className={cn("my-1 leading-6")}>{content}</div>
          </div>
        </div>
        <Button className="w-full my-1">Add to Cart</Button>
      </Container>
    </div>
  );
};
