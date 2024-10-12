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
    <Wrapper className="bg-secondary mt-20 rounded-xl max-w-full ">
      <Container
        className="flex items-center mt-10 max-h-fit py-20 rounded-lg"
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
              <Link
                href="/"
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                Home
              </Link>
              <Link
                href=""
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                products
              </Link>
              <Link
                href=""
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                Tools
              </Link>
            </ul>
          </div>
          <div>
            <p className="font-bold underline underline-offset-4">
              Quick links
            </p>
            <ul className="flex flex-col my-3">
              <Link
                href={""}
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                Terms and Condition
              </Link>
              <Link
                href={""}
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                Privacy policy
              </Link>
              <Link
                href={"/"}
                className="hover:text-primary text-muted-foreground max-w-fit"
              >
                support
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex gap-5 my-3">
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
      <p className="flex justify-center items-center text-md">
        © 2024 Xplore Finance. All rights reserved.
        <span className="text-muted-foreground ms-1">
          Empowering your financial journey, one step at a time.
        </span>
      </p>
    </Wrapper>
  );
}
