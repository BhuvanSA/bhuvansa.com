import React from "react";
import Link from "next/link";
import Image from "next/image";

const logo = ({ onLinkClick }) => {
  return (
    <Link href="/" onClick={onLinkClick}>
      <Image src="logo.svg" width={54} height={54} priority alt="logo" />
    </Link>
  );
};

export default logo;
