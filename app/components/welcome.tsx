"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/splash');
  };

  return (
    <div className="h-svh flex flex-col relative md:hidden">
      <div className="container px-5 pt-24 flex items-center justify-center">
        <div className="grid place-items-center">
          <Image src="/assets/logo.png" className="block" alt={"logo"} width={90} height={100} />
          <p className="text-[2rem] font-bold font-welcome">
            <span className="text-[#FF4500]">Rural</span>
            <span>Guard</span>
          </p>
        </div>
      </div>

      <div className="h-[45vh] bg-[#FF4500] rounded-t-2xl fixed bottom-0 left-0 right-0 z-10">
        <div className="container px-5 grid place-items-center h-full">
          <Button 
            onClick={handleGetStarted}
            className="w-full py-4 bg-white text-[#202020] text-xl font-medium"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}