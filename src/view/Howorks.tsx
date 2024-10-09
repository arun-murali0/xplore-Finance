import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";

export default function Howorks() {
  return (
    <Wrapper className="mx-auto max-w-5xl">
      <Container
        className="flex flex-col items-center justify-center h-full max-md:m-auto py-20 "
        delay={0.5}
      >
        <div className="text-heading text-sm my-2">How we Help</div>
        <h1 className="text-3xl my-2">How We Support Your Trading Journey</h1>
        <div className="leading-6 my-4 text-center text-muted-foreground text-wrap">
          We empower traders with essential skills through focused guidance in
          market analysis, risk management, and mindset development. Our
          resources are designed to help you make informed decisions and thrive
          in the trading landscape.
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </Wrapper>
  );
}
