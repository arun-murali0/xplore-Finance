import Wrapper from "@/global/Wrapper";
import Container from "@/global/container";
import Link from "next/link";

export default function contact() {
  return (
    <Wrapper className="max-w-5xl mx-auto">
      <Container className="flex text-card bg-accent-foreground w-full justify-center items-center flex-col py-10 rounded-lg max-sm:py-5">
        <div className="text-3xl text-card max-sm:text-xl">Contact us</div>
        <div className="text-muted-foreground text-xl my-3 max-sm:text-sm max-sm:px-3">
          Have questions? We are just a message away!{" "}
          <span className="hover:text-primary underline underline-offset-4 mx-2 text-card max-sm:flex max-sm:justify-center max-sm:mt-3  ">
            <Link
              href={"/support"}
              className="text-center"
            >{`Let's connect`}</Link>
          </span>
        </div>
      </Container>
    </Wrapper>
  );
}
