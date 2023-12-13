import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/logo.png';
import styles from './css/navbar.module.css'; // Assuming you have a CSS module for styling

function NavLink() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className={`${styles.navbar} z-50`}>
			<div className={styles.navbar__left}>
				<Link href="/">
					<a className={styles.navbar__logo}>
						<Image src={logo} height={60} width={140} alt="Logo Navigation" />
					</a>
				</Link>
			</div>
			<div className={styles.navbar__right}>
				<div
					className={`${styles.navbar__menu} ${
						isMobileMenuOpen ? styles.open : ''
					}`}
				>
					<Link href="/projects">
						<a className={styles.navbar__link}>Projects</a>
					</Link>
					<Link href="/apply">
						<a className={styles.navbar__link}>Apply</a>
					</Link>
					<Link href="/blog">
						<a className={styles.navbar__link}>Archives</a>
					</Link>
					{/* <Link href="/sponshorship">
						<a className={styles.navbar__link}>Sponsors</a>
					</Link> */}
					<Link href="/speakers">
						<a className={styles.navbar__link}>Speakers</a>
					</Link>
				</div>
				<div className={styles.navbar__mobilemenu} onClick={toggleMobileMenu}>
					<div
						className={`${styles.navbar__hamburger} ${
							isMobileMenuOpen ? styles.open : ''
						}`}
					/>
					<div className={styles.ham_bar}></div>
					<div className={styles.ham_bar}></div>
					<div className={styles.ham_bar}></div>
				</div>
			</div>
		</nav>
	);
}

export default NavLink;
