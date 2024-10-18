import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between p-8 bg-slate-900 bottom-0 w-full h-18">
        <p>Rex-AI</p>
        <p>Copyright © 2022. All rights reserved.</p>
        &nbsp;
        <Button variant="ghost">
          <Link href="https://github.com/codernotme/rex-ai">GitHub</Link>
        </Button>
      </footer>
    </div>
  );
};

export default Footer;
