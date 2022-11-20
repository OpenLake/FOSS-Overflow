import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import logoIcon from '../public/icon.png';
import { ActiveLink } from './ActiveLink';

function NavLink({ href, children }) {
	return (
		<ActiveLink href={href} activeClassName="text-black" passHref>
			<a
				href={href}
				className="text-xl text-blue-500 hover:text-black transition-colors duration-300 block max-w-max mx-auto mt-4 md:mt-0 md:mr-0 md:ml-10"
			>
				{children}
			</a>
		</ActiveLink>
	);
}

const logoWidth = 180;
const logoHeight = (logoWidth / logo.width) * logo.height;

export function Navbar() {
	return (
		<nav>
			<div className="relative container max-w-screen-md mx-auto px-4 md:flex justify-between py-4">
				<Link href="/" passHref>
					<a className="text-center md:text-left hidden md:block">
						<Image
							src={logo}
							alt="FOSS Overflow"
							width={logoWidth}
							height={logoHeight}
						/>
					</a>
				</Link>
				<div className="md:flex items-center">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/apply">Apply</NavLink>
					<NavLink href="/blog">Archives</NavLink>
					<NavLink href="/sponshorship">Sponshorship</NavLink>
					<NavLink href="/speakers">Speakers</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</div>

				<div className="absolute top-4 right-4 md:hidden">
					<Image src={logoIcon} alt="FOSS Overflow" width={40} height={40} />
				</div>
			</div>
		</nav>
	);
}
