import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <Wrapper className="bg-card max-w-full ">
      <Container
        className="flex items-center mt-20 max-h-fit py-20 rounded-lg"
        delay={0}
      >
        <div className="grid grid-cols-4 gap-20 items-center justify-center px-20">
          <div className="flex flex-col flex-wrap">
            {/* <Image src={Logo} alt="" /> */}
            Logo
            <div className="text-pretty text-[15px] my-3 text-muted-foreground">
              Our mission is to equip you with the knowledge and confidence to
              achieve your financial aspirations.
            </div>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4">Resources</p>
            <ul className="flex flex-col my-3">
              <Link href="/" className="hover:text-heading">
                Home
              </Link>
              <Link href="" className="hover:text-heading">
                products
              </Link>
              <Link href="" className="hover:text-heading">
                Tools
              </Link>
            </ul>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4">
              Quick links
            </p>
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
          <div>
            <p className="font-bold underline underline-offset-4">
              Social Link
            </p>
            <ul className="flex flex-col my-3">
              <Link href={""} className="hover:text-heading">
                Insta
              </Link>
              <Link href={""} className="hover:text-heading ">
                Twitter
              </Link>
              <Link href={""} className="hover:text-heading">
                Youtube
              </Link>
            </ul>
          </div>
        </div>
      </Container>
      <p className="flex justify-center items-center mb-3 text-md">
        © 2024 Xplore Finance. All rights reserved.
        <span className="text-muted-foreground ms-1">
          Empowering your financial journey, one step at a time.
        </span>
      </p>
    </Wrapper>
  );
}
