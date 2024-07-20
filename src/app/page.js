import Hero from "@/components/hero/Hero";
import ServiceDisplay from "@/components/serviceDisplay/ServiceDisplay";

export default function Home() {
  return (
    <main>
      <div className="mt-24">
        <Hero />
      </div>
      <ServiceDisplay />
    </main>
  );
}
