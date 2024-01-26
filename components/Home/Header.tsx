import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const AppHeader: React.FunctionComponent<{}> = () => {
    return (
        <header>
            <div className="py-5 px-10">
                <Image
                    width={200}
                    height={100}
                    src={"/logo.png"}
                    alt={"logo"}
                />
            </div>
            <nav className="text-gray-50 bg-black py-4 px-5 flex flex-row gap-5 flex-wrap items-center ">
                <Link href={"/"}>
                    <FaHome className="text-2xl text-gray-50" />
                </Link>
                <Link href={"/about-us"}>About us</Link>
                {/* <Link href={"/contact-us"}>Contact us</Link> */}
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                <Link href={"/terms-condition"}>Terms and Condition</Link>
            </nav>
        </header>
    );
};

export default AppHeader;
