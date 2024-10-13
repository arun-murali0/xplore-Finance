import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <Wrapper className="bg-secondary mt-20 rounded-xl max-w-full max-sm:mt-5 max-sm:rounded-none">
      <Container
        className="flex items-center mt-10 max-h-fit py-20 max-sm:flex max-sm:gap-2 max-sm:px-1 max-sm:mt-2 max-sm:py-5 max-sm:flex-wrap"
        delay={0}
      >
        <div className="grid grid-cols-4 gap-20 items-center justify-center px-20 max-sm:px-2 max-sm:grid max-sm:grid-cols-3 max-sm:justify-start max-sm:items-start max-sm:gap-2 ">
          <div className="flex flex-col flex-wrap">
            {/* <Image src={Logo} alt="" /> */}
            Logo
            <div className="text-pretty text-[15px] my-3 text-muted-foreground max-sm:text-xs max-sm:my-[1px] max-sm:text-pretty">
              Our mission is to equip you with the knowledge and confidence to
              achieve your financial aspirations.
            </div>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4 max-sm:text-sm max-sm:font-normal max-sm:no-underline">
              Resources
            </p>
            <ul className="flex flex-col my-3 max-sm:my-1 max-sm:text-sm">
              <Link
                href="/"
                className="hover:text-primary text-muted-foreground max-w-fit max-sm:text-sm"
              >
                Home
              </Link>
              <Link
                href=""
                className="hover:text-primary max-sm:text-sm text-muted-foreground max-w-fit"
              >
                products
              </Link>
              <Link
                href=""
                className="hover:text-primary text-muted-foreground max-w-fit max-sm:text-sm"
              >
                Tools
              </Link>
            </ul>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4 max-sm:font-normal max-sm:text-sm max-sm:no-underline">
              Quick links
            </p>
            <ul className="flex flex-col my-3 max-sm:my-1">
              <Link
                href={""}
                className="hover:text-primary text-muted-foreground max-w-fit max-sm:text-sm"
              >
                Terms and Condition
              </Link>
              <Link
                href={""}
                className="hover:text-primary text-muted-foreground max-w-fit max-sm:text-sm"
              >
                Privacy policy
              </Link>
              <Link
                href={"/"}
                className="hover:text-primary text-muted-foreground max-w-fit max-sm:text-sm"
              >
                support
              </Link>
            </ul>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4 max-sm:font-normal max-sm:text-sm max-sm:no-underline max-sm:my-2 max-sm:flex">
              Follow us on
            </p>
            <ul className="flex gap-5 my-3 max-sm:flex max-sm:justify-start max-sm:mt-1 max-sm:my-1 max-sm:gap-1">
              <Link href={""} className="hover:text-primary max-w-fit">
                <IoLogoInstagram />
              </Link>
              <Link href={""} className="hover:text-primary max-w-fit">
                <FaXTwitter />
              </Link>
              <Link href={""} className="hover:text-primary max-w-fit">
                <FaYoutube />
              </Link>
            </ul>
          </div>
        </div>
      </Container>
      <p className="flex justify-center items-center text-md pb-2 max-sm:text-sm max-sm:flex-col">
        © 2024 Xplore Finance. All rights reserved.
        <span className="text-muted-foreground ms-1 max-sm:text-xs max-sm:mt-1 max-sm:ms-0">
          Empowering your financial journey, one step at a time.
        </span>
      </p>
    </Wrapper>
  );
}
