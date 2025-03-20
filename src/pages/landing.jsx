import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import companies from "../../src/data/companies.json";
import Autoplay from "embla-carousel-autoplay";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img
              src="/logo.png"
              alt="Hirred"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore Thousands of jobs listning or find the perfect candidate
        </p>
      </section>
      <div className="flex items-center gap-4 justify-center">
        <Link to={"/job"}>
          <Button>Find Jobs</Button>
        </Link>
        <Link to={"/post-jobs"}>
          <Button>Post a Job</Button>
        </Link>
        {/* Buttons */}
      </div>
      {/* Carousel */}
      <Carousel
        opts={{ align: "start" }}
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}

      <img src="/banner.jpeg" alt="Banner" className="w-full" />

      <section>{/* Cards */}</section>

      {/* Accrodtion */}
    </main>
  );
}
