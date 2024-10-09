import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Wrapper className="flex flex-col items-center justify-center h-full max-md:m-auto py-16">
      <div className="flex flex-col items-center mt-20 max-w-3xl w-11/12 md:w-full max-sm:mt-8">
        <h1 className="text-7xl max-md:text-3xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-black-50  md:m-auto">
          Stock Market Mastery
        </h1>
        <p className="text-base text-muted-foreground  mt-6 text-center max-sm:text-pretty max-sm:ms-5">
          Master the art of stock market investing through our comprehensive,
          beginner-friendly courses. Unlock the secrets to smart trading and
          financial growth.
        </p>
        <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
          <div className="flex items-center justify-center w-max rounded-full  px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl  select-none">
            <p className="text-heading text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
              ✨ Start Your Journey to Financial Mastery
            </p>
            <Link href={"/register"}>
              <Button
                size="sm"
                className="text-lg p-6 rounded-full text-primary bg-primary text-white border-b-primary"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
