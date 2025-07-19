import DelegateDirectory from "@/components/council/delegate-directory";

export default function CouncilPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Circle of 144
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Meet the planetary delegates—indigenous leaders, tech elders, youth voices, and bioregional stewards—guiding our collective journey.
          </p>
        </header>
        <DelegateDirectory />
      </div>
    </>
  );
}
