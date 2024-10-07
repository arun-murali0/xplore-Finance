"use client";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { useLottie } from "lottie-react";
import stock from "../../public/stock.json";

export default function Product() {
  const option = {
    animationData: stock,
    loop: true,
  };

  const { View } = useLottie(option);

  return (
    <Wrapper className="max-w-3xl my-40">
      <Container>
        <div className="max-w-md mx-auto text-start md:text-center my-10">
          <SectionBadge title="Our Products" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>{View}</div>
          <div>
            <p className="text-sm leading-6 mb-5 text-balance text-muted-foreground">
              At Xplore Finance, we believe that financial mastery is within
              everyone reach.Our platform is dedicated to empowering you to take
              charge of your financial destiny with confidence and
              expertise.Whether you are a novice,looking to understand the
              basics or an experienced trader aiming to refine your skills.our
              comprehensive courses are designed to meet your needs
            </p>
            <Link href={"/products"}>
              <Button className="w-full">view our Products</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
