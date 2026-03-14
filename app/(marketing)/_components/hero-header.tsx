"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { RegisterLink, LoginLink, useKindeBrowserClient, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function HeroHeader() {

   const {getUser, isLoading} = useKindeBrowserClient()

   const user = getUser() 

  return (
     <header className="w-full flex gap-2 justify-between sm:py-8 py-5 items-center">
        <h2 className="text-2xl">TeamSync</h2>

        {/* <Button className="text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-white bg-muted outline outline-border hover:opacity-90 focus-visible:outline-border w-24 h-9 text-[1rem] cursor-pointer">
            Get Started
        </Button> */}

       {isLoading ? null : (
         <div className="flex items-center gap-2 ">
             {
              user ? 
              <>
               <Link className={buttonVariants({size: 'sm'})} href="/workspace">
               <span>Dashboard</span>
               </Link>

               <LogoutLink className={buttonVariants({size: 'sm', variant: 'outline'})}>
                <span>Logout</span>
               </LogoutLink>
              </>
              : 
              <div className="flex items-center gap-2 ">
          <LoginLink className={buttonVariants({variant: "outline", size: 'sm'})}>
            Login
          </LoginLink>

          <RegisterLink className={buttonVariants({
            size: 'sm'
          })}>
           Sign up
          </RegisterLink>
        </div>
             }
         </div>
       )}
        

     </header>
  );
}
 