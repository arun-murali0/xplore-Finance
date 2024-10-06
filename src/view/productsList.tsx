import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import { Cards } from "@/constant";
import dummy from "../../public/dummy.webp";
import Image from "next/image";

export default function productsList() {
  return (
    <Wrapper className="max-w-5xl">
      <Container delay={0.4} className="my-32">
        <h1>Products List</h1>
        <div className="grid grid-cols-3 gap-2">
          {Cards.map((card, index) => (
            <div key={index}>
              <Card className="mx-auto">
                <Image
                  src={dummy}
                  alt="card-image"
                  className="p-3 rounded-xl"
                  height={300}
                  width={300}
                />
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-md text-wrap text-sm">
                    {card.cardTitle}
                  </CardTitle>
                  <CardDescription>{card.cardDescription}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 text-wrap">
                  <ul className="text-sm leading-6 text-muted-foreground">
                    {card.learn?.map((learn) => {
                      return <li key={learn}>{learn}</li>;
                    })}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="bg-primary w-full">
                    {card.cardFooter}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
