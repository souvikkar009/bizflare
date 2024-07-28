import Hero from "@/components/hero/Hero";
import ServiceDisplay from "@/components/serviceDisplay/ServiceDisplay";

export default function Home() {
  return (
    <main>
      <div className="mt-20">
        <Hero />
      </div>
      <ServiceDisplay />
    </main>
  );
}
