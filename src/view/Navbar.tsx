"use client";

import Container from "@/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { isDark } from "@/store/userSlice";

const Navbar = () => {
  const dark = useSelector((state: RootState) => state.user.dark);
  const dispatch: AppDispatch = useDispatch();

  console.log(dark);
  const handleToggleDark = () => {
    dispatch(isDark());
  };

  return (
    <header className={`px-4 h-20 sticky top-0 inset-x-0 w-full z-50 dark`}>
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              {/* <Icons.logo className='w-8 h-8' /> */}
              <span className="text-lg font-medium">Xplore Finance</span>
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="#" className="hover:text-heading text-sm">
                Product
              </Link>
              <Link href="#" className="hover:text-heading text-sm">
                Service
              </Link>
              <Link href="#" className="hover:text-heading text-sm">
                Tools
              </Link>
              <Link href="#" className="hover:text-heading text-sm">
                Blog
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="p-6 rounded-full hover:text-primary-foreground">
              <Link href="">Login</Link>
            </Button>
            <Button onClick={() => handleToggleDark()}>Dark</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
