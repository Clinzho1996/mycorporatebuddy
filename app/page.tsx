import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full bg-hero pb-5 bg-no-repeat bg-cover">
      <Header />
      <Hero />
      <section className="mt-10 md:mt-20 flex flex-wrap gap-5 w-full md:w-[750px] align-middle items-center md:px-5 px-10 mx-auto">
        <Cards
          img="/medicine.png"
          title="Medicine"
          description="Welcome to Heal Hub, where wellness meets convenience on your terms..."
          className="bg-blue-1"
          descriptionClassName="text-blue-3"
          buttonClassName="bg-blue-2 rounded-3xl"
          handleClick={() => {}}
        />
        <Cards
          img="/dine.png"
          title="Dine Ease"
          description="Dine Ease, ultimate and best destination, Ease brings you your favorite flavors..."
          className="bg-gold-1"
          descriptionClassName="text-brown-3"
          buttonClassName="bg-gold-2 rounded-3xl"
          handleClick={() => {}}
        />
        <Cards
          img="/cars.png"
          title="Find Cars"
          description="AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle..."
          className="bg-brown-1"
          descriptionClassName="text-brown-3"
          buttonClassName="bg-brown-2 rounded-3xl"
          handleClick={() => {}}
        />
        <Cards
          img="/electronics.png"
          title="Electronics"
          description="ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience."
          className="bg-green-1"
          descriptionClassName="text-brown-3"
          buttonClassName="bg-green-2 rounded-3xl"
          handleClick={() => {}}
        />
      </section>
    </main>
  );
}
