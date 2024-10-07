import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";

export default function Hero() {
  return (
    <Wrapper>
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div className="flex flex-col items-center mt-20 max-w-3xl w-11/12 md:w-full max-sm:mt-8">
        <h1 className="text-7xl max-md:text-3xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent md:m-auto">
          Stock Market Mastery
        </h1>
        <p className="text-base text-muted-foreground  mt-6 text-center max-sm:text-pretty max-sm:ms-5">
          Master the art of stock market investing through our comprehensive,
          beginner-friendly courses. Unlock the secrets to smart trading and
          financial growth.
        </p>
        <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
          <Link
            href="/register"
            className="flex items-center justify-center w-max rounded-full  px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl  cursor-pointer select-none"
          >
            <p className="text-muted-foreground text-md text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
              ✨ Start Your Journey to Financial Mastery
            </p>
            <Button
              size="sm"
              variant={"outline"}
              className="text-lg p-6 rounded-lg text-primary-foreground border-b-card-foreground"
            >
              Sign Up Today !
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
