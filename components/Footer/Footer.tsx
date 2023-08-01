import React from "react";
import Link from "next/link";
import socialMediaLinks from "./social-media-links";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-center items-center">
        <ul className="flex flex-col sm:flex-row gap-4">
          {socialMediaLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.url} className="hover:text-gray-400">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-4">
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
