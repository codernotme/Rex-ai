import { Link } from "@nextui-org/react";
import React from "react";
import { GithubIcon } from "./icons";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between p-8  gap-4 mx-auto w-full h-12">
        <p>Rex-AI</p>
        <p>Copyright © 2022. All rights reserved.</p>
        &nbsp;
        <Link
          target="_blank"
          color="secondary"
          href="https://github.com/codernotme/rex-ai"
        >
          <GithubIcon />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
