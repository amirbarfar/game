'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
// import { useState } from "react";

// interface TypeArrayImage {
//   id: number,
//   img: string
// }

export default function Home() {

  // const [arrayImage, setArrayImage] = useState([
  //   { id: 1, img: "/images/header-1.png" },
  //   { id: 2, img: "/images/header-1.png" },
  //   { id: 3, img: "/images/header-1.png" },
  //   { id: 4, img: "/images/header-1.png" }
  // ])

  return (
    <div className="bg-slate-900 min-h-screen px-20 py-12">
      <Navbar />
      <div className="relative">
        <Image src="/images/header-1.png" alt="header-img" className="w-full absolute mt-10" width={800} height={800} />
      </div>
    </div>
  );
}
