import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, Hammer, Rocket, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
     <div>
       <div className="px-8 py-16">
  <div className="max-w-xl mx-auto text-center lg:text-balance">
    <p
      className="text-xs relative font-semibold uppercase tracking-wide text-muted-foreground text-foreground"
    >
      A better way to build together
      <a href="#_" className="relative text-foreground">
        <span className="absolute inset-0" aria-hidden="true"></span> See how it
        works
      </a>
    </p>
    <h2
      className="text-2xl md:text-3xl lg:text-4xl mt-12 font-semibold tracking-tight text-foreground lg:text-balance"
    >
      Teamwork that feels effortless
    </h2>
    <p className="text-sm mt-4 text-muted-foreground lg:text-balance leading-7">
      Launch projects, share ideas, and keep everyone in sync—without the
      hassle. Oxbow makes collaboration simple and enjoyable.
    </p>
    <div className="flex flex-wrap items-center justify-center mx-auto mt-8 gap-4">
       <Button className="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none w-40 h-12 text-[1rem]" size="lg">
         <Rocket className="h-4 w-4" />
         Start Building
       </Button>
       <Button className="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-white bg-muted outline outline-border hover:opacity-90 focus-visible:outline-border w-40 h-12 text-[1rem]" size="lg">
         <Sparkles className="h-4 w-4" />
         Request a Demo
       </Button>
       
    </div>
  </div>

  <div
    className="relative mt-12 overflow-hidden rounded-lg shadow outline outline-border"
  >
    <Image
      src="/image/hero-img.png"
      loading="eager"
      decoding="async"
      alt="dashboard"
      width="1200"
      height="1200"
      className="object-cover h-full"
    />
  </div>


  <div className="max-w-xl mx-auto text-center py-16">
  <p
    className="text-xs relative font-semibold uppercase tracking-wide text-muted-foreground text-foreground"
  >
    Updates as fast as you think
    <a href="#_" className="relative text-foreground">
      <span className="absolute inset-0" aria-hidden="true"></span> See all features
    </a>
  </p>
  <h2
    className="text-2xl md:text-3xl lg:text-4xl mt-12 font-semibold tracking-tight text-foreground lg:text-balance"
  >
    Everything in sync, always
  </h2>
  <p className="text-sm mt-4 text-muted-foreground lg:text-balance">
    No more waiting, no more chaos. Oxbow keeps your team and your code up to
    date in real time, so you can focus on building.
  </p>
  <div className="flex flex-wrap items-center justify-center mx-auto mt-8 gap-2">
    <button
      className="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-accent-foreground bg-brand outline outline-brand hover:opacity-90 focus-visible:outline-border h-9 px-4 text-sm"
    >
      Try Oxbow free
    </button>
    <button
      className="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-muted-foreground bg-muted outline outline-border hover:opacity-90 focus-visible:outline-border h-9 px-4 text-sm"
    >
      See pricing
    </button>
  </div>
</div>
<dl
  className="mt-12 text-center grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-y-16"
>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-filter size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
        <path d="M8 11a5 5 0 1 0 3.998 1.997"></path>
        <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Live editing</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Change stuff and see it instantly — like magic, but with fewer rabbits.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-wave-square size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12h5v8h4v-16h4v8h5"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Autocompletion</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        We’ll finish your classNamees so you don’t have to play guessing games.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-arrow-iteration size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5"></path>
        <path d="M3 16h18"></path>
        <path d="M18 13l3 3l-3 3"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Hide/show classNamees</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Toggle styles like a control freak — minus the chaos.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-plus size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Color preview</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        No more color roulette. See exactly what you&#39;re adding before you
        commit.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-external-brain size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"
        ></path>
        <path
          d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
        ></path>
        <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path>
        <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path>
        <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path>
        <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Instant reloads</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Preview changes faster than your brain can process regret.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-layout-users-clock size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M12 7v5l3 3"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">className stacking</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Stack utility classNamees without feeling like you’re defusing a bomb.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-code size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 8l-4 4l4 4"></path>
        <path d="M17 8l4 4l-4 4"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
      <dt><h3 className="text-base font-medium text-foreground">Focus mode</h3></dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Hide the noise. Focus on what matters. Like your sanity.
      </p>
    </dd>
  </div>
  <div>
    <div className="flex flex-col items-center text-foreground gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler-arrow-tools size-5 text-foreground"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
        <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
        <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
      </svg>
      <dt>
        <h3 className="text-base font-medium text-foreground">Clean output</h3>
      </dt>
    </div>
    <dd>
      <p className="text-sm mt-2 text-muted-foreground">
        Your code stays as clean as your intentions. No weird side effects, we
        promise.
      </p>
    </dd>
  </div>
</dl>
</div>

     </div>
  );
}
 