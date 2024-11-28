"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signup');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-[#151515] h-svh flex flex-col relative">
      <div className="h-[75vh] fixed bottom-0 left-0 right-0 z-10 bg-black">
        <Image
          src="/assets/splash.jpg"
          alt="hello"
          width={1024}
          height={1024}
          className="bg-cover h-full"
        />
      </div>

      <div className="absolute w-full h-full z-20 bg-[#151515] bg-opacity-40"></div>
      <div className="font-welcome font-bold absolute bottom-24 left-0 right-0 text-xl space-y-4 text-center z-40">
        <div className="">
          <p className="text-[#FF4500]">Think</p>
          <p>
            <span className="text-white">Rural</span>
            <span className="text-[#FF4500]">Guard,</span>
          </p>
        </div>
        <div>
          <p className="text-[#FF4500]">Think</p>
          <p>
            <span className="text-white">Rural</span>
            <span className="text-[#FF4500]">Safety!</span>
          </p>
        </div>
      </div>
    </div>
  );
}