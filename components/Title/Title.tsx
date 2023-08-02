import Image from "next/image";
import img from "./portrait.jpg"
import {BsGithub,BsLinkedin, BsInstagram} from "react-icons/bs"
import Link from "next/link";
const Title = () => {
  return (
    <div className="min-h-[33vh] sm:min-h-[66vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <Image src={img} alt="portrait" className="rounded-full aspect-square w-32 object-cover object-top m-4 ring-2 ring-slate-900/80 shadow-lg"/>
        <h1 className="text-3xl font-semibold mb-4 ">Hi, I am John Doe.</h1>
        <p className="text-gray-600">Let me tell you about myself.</p>
        <hr className="border-t-4 w-full mt-6 h-full border-slate-900"/>
        <div className="flex gap-4 flex-wrap w-full items-center justify-center my-4">
          <Link href="https://www.instagram.com">
            <BsInstagram className="w-8 h-8 hover:text-slate-500"/>
          </Link>
          <Link href="https://www.github.com">
            <BsGithub className="w-8 h-8 hover:text-slate-500"/>
          </Link>
          <Link href="https://www.linkedin.com">
            <BsLinkedin className="w-8 h-8 hover:text-slate-500"/>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Title;
