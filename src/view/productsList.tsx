import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import { Card } from "@/components/ui/Productcard";
import { Cards } from "@/constant";
import dummy from "../../public/dummy.webp";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Breadcrum from "./Breadcrum";
import { ExapandableCard } from "@/components/ui/ExapandableCard";

export default function productsList() {
  return (
    <Wrapper className="mt-10">
      <Breadcrum />
      <Container className="flex justify-center items-center gap-2 mt-10 max-md:flex max-md:flex-col max-md:gap-2 max-md:w-full">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
        {Cards.map((cardlist, index) => (
          <div key={index}>
            <HoverCard>
              <HoverCardTrigger>
                <Card
                  img={dummy}
                  title={cardlist.cardTitle}
                  footer={cardlist.cardFooter}
                  content={cardlist.cardAuthor}
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <ExapandableCard
                  key={index}
                  title={cardlist.cardTitle}
                  content={cardlist.learn.map((list, index) => {
                    return (
                      <ul key={index}>
                        <li className="my-[2px]">{list}</li>
                      </ul>
                    );
                  })}
                />
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </Container>
      <div className="flex justify-center items-center text-muted-foreground text-md my-6">
        More content will be added
      </div>
    </Wrapper>
  );
}
