import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper className="bg-card max-w-full">
      <Container
        className="flex justify-between items-center w-full  mt-20 max-h-fit py-20"
        delay={0}
      >
        <div className="grid grid-cols-4 gap-36 px-20">
          <div className="flex flex-col flex-wrap">
            <div>logo</div>
            <div className="text-pretty text-[12px] my-3">
              Our mission is to equip you with the knowledge and confidence to
              achieve your financial aspirations.
            </div>
          </div>
          <div>
            <p className="font-extrabold">Resources</p>
            <ul className="flex flex-col my-3">
              <Link href="/" className="hover:text-heading">
                Home
              </Link>
              <Link href="" className="hover:text-heading">
                products
              </Link>
            </ul>
          </div>
          <div>
            <p className="font-extrabold">Quick links</p>
            <ul className="flex flex-col my-3">
              <Link href={""} className="hover:text-heading">
                terms
              </Link>
              <Link href={""} className="hover:text-heading">
                Privacy policy
              </Link>
              <Link href={"/"} className="hover:text-heading">
                support
              </Link>
            </ul>
          </div>
          <div>News slatter</div>
        </div>
      </Container>
      <p className="flex justify-center items-center mb-3 text-md">
        © 2024 Xplore Finance. All rights reserved.
        <span className="text-muted-foreground">
          Empowering your financial journey, one step at a time.
        </span>
      </p>
    </Wrapper>
  );
}
