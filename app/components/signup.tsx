import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/signup.jpg"
          className="block"
          alt={"logo"}
          width={1080}
          height={1054}
        />
        <div className="absolute w-full h-full z-10 bg-[#474747] bg-opacity-40"></div>
      </div>

      <div className="h-[50vh] bg-white rounded-t-2xl absolute bottom-0 left-0 right-0 z-20">
        <div className="container px-5 grid place-items-center h-full">
          <div className="space-y-4 w-full">
            <Input placeholder="Name" className="py-4 ring-0 outline-none" />
            <Input placeholder="Enter Location (community)" className="py-4 " />
          </div>
          <Button className="block w-full text-xl font-medium bg-[#FF4500]">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
