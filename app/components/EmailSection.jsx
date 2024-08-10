import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 py-24">
        <div className='flex flex-col items-center'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text=[#ADB7BE] mb-4 max-w-md font-light'>
                {" "}
                I'm always in the search for new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/pageja25">
                    <FaGithub size={30}/>
                </Link>
                <Link href="https://www.linkedin.com/in/javin-page/">
                    <FaLinkedin size={30}/>
                </Link>
                <Link href="mailto:javinpage@gmail.com">
                    <CgMail size={30}/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default EmailSection