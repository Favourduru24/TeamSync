import { Button } from "@/components/ui/button";

export default function HeroHeader() {
  return (
     <header className="w-full flex gap-2 justify-between sm:py-8 py-5 items-center">
        <h2 className="text-2xl">TeamSync</h2>

        <Button className="text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-white bg-muted outline outline-border hover:opacity-90 focus-visible:outline-border w-24 h-9 text-[1rem] cursor-pointer">
            Get Started
        </Button>

     </header>
  );
}
 