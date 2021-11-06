import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from "react";
import styled from "styled-components";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <Link href="/" ><a><Image src="/logo-noor.svg" width={58} height={76} alt="logo" /></a></Link>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)}>
          <Link href="/projects/"><a className={styles.item}>More work</a></Link>
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)}>
          <Link href="/about/"><a className={styles.item}>About </a></Link>
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)}><Link href="/contact/"><a className={styles.item}>Contact</a></Link></MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 0 2rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
`;

const Nav = styled.div`
  position:sticky;
  background-color:#fdf8f4;
  z-index: 2;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    text-aign:left;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 35px;
    background: #3B5C60;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;