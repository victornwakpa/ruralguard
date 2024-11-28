import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#151515] h-svh flex flex-col relative md:hidden">
      <div className="h-[100vh] fixed bottom-0 left-0 right-0 z-10 bg-black">
        <Image
          src="/assets/splash.jpg"
          alt="hello"
          width={1024}
          height={1024}
          className="bg-cover h-full"
        />
      </div>
      <div className="z-30 fixed top-2 left-2">
        <Image
          src="/assets/logo2.png"
          alt="hello"
          width={35}
          height={39}
          className="bg-cover h-full mt-4 ml-4"
        />
      </div>

      <div className=" bg-[#ff4500] absolute bottom-0 left-0 right-0 z-30">
        <div className="flex justify-between px-5 py-2 font-medium">
          <div className="flex flex-col justify-center">
            <Image
              src="/assets/home-icon.png"
              alt="hello"
              width={18}
              height={20}
              className="bg-cover h-full mt-4 ml-4"
            />
            <p>Home</p>
          </div>
          <Link href={"/notice"}>
            <div className="flex flex-col justify-center">
              <Image
                src="/assets/notice-icon.png"
                alt="hello"
                width={19}
                height={22}
                className="bg-cover h-full mt-4 ml-4"
              />
              <p>Notice</p>
            </div>
          </Link>
          <div>
            <Drawer>
              <DrawerTrigger>
                <div className="flex flex-col justify-center">
                  <Image
                    src="/assets/red-icon.png"
                    alt="hello"
                    width={24}
                    height={24}
                    className="bg-cover h-full mt-4 ml-4"
                  />
                  <p>Red Alert</p>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="hidden">
                  <DrawerTitle className="hidden">
                    Are you absolutely sure?
                  </DrawerTitle>
                </DrawerHeader>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 px-5 py-6">
                  <Button className="bg-[#ff4500] rounded-full shadow-lg font-medium">
                    SOS
                  </Button>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="airplane-mode">Anonymous</Label>
                      <Switch id="airplane-mode" />
                    </div>
                  </div>
                  <Button className="bg-[#ff4500] rounded-full shadow-lg font-medium">
                    Call
                  </Button>
                  <Button className="bg-[#ff4500] rounded-full shadow-lg font-medium">
                    Video
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full z-20 bg-[#151515] bg-opacity-40"></div>
    </div>
  );
}
