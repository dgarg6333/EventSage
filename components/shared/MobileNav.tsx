import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
  
  
  const MobileNav = () => {
    return (
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={25}
              height={8}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <div className="flex flex-row">
              <Image 
                src="/assets/images/logo.png"
                alt="logo"
                width={40}
                height={12}
              />
              <div className='text-2xl font-semibold pt-1'>EventSage</div>
            </div>
            <Separator className="border border-gray-50" />
            <NavItems/>
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav