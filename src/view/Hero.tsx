import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/global/container";

export default function Hero() {
  return (
    <Wrapper className="flex flex-col items-center justify-center h-full max-md:m-auto py-16 max-sm:px-1">
      <Container
        className="flex flex-col items-center mt-20 max-w-3xl w-11/12 md:w-full max-sm:mt-8 max-sm:flex max-sm:justify-center"
        delay={0}
      >
        <h1 className="text-6xl max-md:text-3xl md:!leading-snug font-semibold text-center to-black-50 max-sm:text-3xl max-sm:font-semibold max-sm:tracking-wide">
          Stock Market Mastery
        </h1>
        <p className="text-base text-muted-foreground  mt-6 text-center max-sm:text-sm max-sm:ms-2 max-sm:mt-3 max-sm:text-start max-sm:leading-5">
          Master the art of stock market investing through our comprehensive,
          beginner-friendly courses. Unlock the secrets to smart trading and
          financial growth.
        </p>
        <div className="hidden md:flex relative items-center justify-center mt-8 w-full max-sm:block max-sm:px-3">
          <div className="flex items-center justify-center w-max rounded-full px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl  select-none max-sm:text-xs max-sm:flex-col">
            <p className="text-primary text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0 max-sm:text-xs hidden">
              ✨ Start Your Journey to Financial Mastery
            </p>
            <Link href={"/register"}>
              <Button
                size="sm"
                className="text-lg p-6 rounded-full  hover:text-primary-foreground max-sm:my-1 max-sm:text-sm max-sm:px-6"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
