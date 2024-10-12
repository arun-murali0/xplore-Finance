import Wrapper from "@/global/Wrapper";
import Container from "@/global/container";
import Link from "next/link";

export default function contact() {
  return (
    <Wrapper className="max-w-5xl mx-auto">
      <Container className="flex text-card bg-foreground w-full justify-center items-center flex-col py-10 rounded-lg">
        <div className="text-3xl text-card">Contact us</div>
        <div className="text-muted-foreground text-xl my-3">
          Have questions? We are just a message away!{" "}
          <span className="hover:text-primary underline underline-offset-4 mx-2 text-card">
            <Link href={"/support"}>{`Let's connect`}</Link>
          </span>
        </div>
      </Container>
    </Wrapper>
  );
}
