import EarthScorecard from "@/components/dashboard/earth-scorecard";

export default function DashboardPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Earth Scorecard
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Real-time planetary health data, brought to life through visual storytelling and enhanced by AI-powered insights for regenerative action.
          </p>
        </header>

        <EarthScorecard />
      </div>
    </>
  );
}
