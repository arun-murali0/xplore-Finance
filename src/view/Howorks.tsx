import { WorkCard } from "@/components/ui/cardWorks";
import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import { works } from "@/constant";

export default function Howorks() {
  return (
    <Wrapper className="mx-auto max-w-5xl">
      <Container className="flex flex-col items-center justify-center h-full max-md:m-auto py-20 max-sm:py-10 md:flex-wrap ">
        <div className="text-primary text-sm my-2">How we Help</div>
        <h1 className="text-3xl my-2 max-sm:text-lg max-sm:font-medium max-sm:text-center">
          How We Support Your Trading Journey
        </h1>
        <div className="leading-6 my-4 text-center text-muted-foreground text-wrap max-sm:text-sm max-sm:text-start">
          We empower traders with essential skills through focused guidance in
          market analysis, risk management, and mindset development. Our
          resources are designed to help you make informed decisions and thrive
          in the trading landscape.
        </div>
        <div className="flex justify-between items-center gap-3 mt-5 max-sm:flex max-sm:flex-col">
          {works.map((work, index) => (
            <div key={index}>
              <WorkCard
                title={work.title}
                icon={work.icon}
                content={work.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
