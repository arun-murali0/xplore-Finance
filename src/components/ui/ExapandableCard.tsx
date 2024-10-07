import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "./button";

interface cardProp {
  className: String;
  title: String;
  content: any;
}

export const ExapandableCard: FC<cardProp> = ({
  title,
  content,
  className,
}) => {
  return (
    <Wrapper>
      <Container>
        <div className="p-3">
          <div className={cn("text-muted-foreground text-md", className)}>
            {title}
          </div>
          <div className={cn("leading-4 text-sm", className)}>{content}</div>
        </div>
        <Button>Add to Cart</Button>
      </Container>
    </Wrapper>
  );
};
