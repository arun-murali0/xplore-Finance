import Wrapper from "@/global/Wrapper";
import Container from "@/global/container";
import Link from "next/link";

export default function contact() {
  return (
    <Wrapper className="max-w-5xl mx-auto">
      <Container className="flex text-card bg-neutral-800 w-full justify-center items-center flex-col py-20 rounded-lg">
        <div className="text-3xl">Contact us</div>
        <div className="text-muted-foreground text-xl my-3">
          Have questions? We are just a message away!{" "}
          <span className="text-white underline mx-2">
            <Link href={""}>Let s connect</Link>
          </span>
        </div>
      </Container>
    </Wrapper>
  );
}
