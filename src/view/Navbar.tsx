import Container from '@/global/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import Image from "next/image"

import { LuSunMedium } from 'react-icons/lu';
import { BsFillMoonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { isDark } from '@/store/userSlice';
import Logo from "../../public/blacky.webp"
import blackLogo from "../../public/whity.webp"

const Navbar = () => {
	const dispatch: AppDispatch = useDispatch();
	const dark = useSelector(
		(state: RootState) => state.user.dark
	);
	const toggleDarkMode = () => {
		dispatch(isDark());
	};
	return (
		<header
			className={`px-4 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg  z-50`}
		>
			<Container reverse delay={0.1}>
				<div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
					<div className="flex items-start">
						<Link
							href="/"
							className="flex items-center gap-2"
						>
							<Image src={Logo} alt="" width={150} height={100}/>
						</Link>
					</div>
					<nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<ul className="flex items-center justify-center gap-8">
							<Link
								href="#"
								className="hover:text-primary text-sm"
							>
								Product
							</Link>
							<Link
								href="#"
								className="hover:text-primary text-sm"
							>
								Service
							</Link>
							<Link
								href="#"
								className="hover:text-primary text-sm"
							>
								Tools
							</Link>
							<Link
								href="#"
								className="hover:text-primary text-sm"
							>
								Blog
							</Link>
						</ul>
					</nav>
					<div className="flex items-center gap-4">
						<button
							onClick={toggleDarkMode}
							className="bg-inherit outline-none text-lg me-4"
						>
							{dark ? (
								<LuSunMedium className="outline-none hover:bg-none fill-primary" />
							) : (
								<BsFillMoonFill className="outline-none hover:bg-none " />
							)}
						</button>
						<Button className="px-6 rounded-full hover:text-primary-foreground">
							<Link href="/login">Login</Link>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
