import Image from "next/image";
import EthosTree from "@/components/covenant/ethos-tree";

export default function CovenantPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Living Regeneration Codex
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Our guiding principles for a thriving planetary future, rooted in ancient wisdom and future-facing technology.
        </p>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-headline text-3xl font-bold mb-6">The Ethos Tree</h2>
          <EthosTree />
        </div>
        
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
             <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm" style={{
                background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--secondary)/0.5))",
                borderImage: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent))) 1",
             }}>
              <h3 className="font-headline text-2xl font-semibold mb-4">A Visual Manifesto</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Inspired by the renaissance scrolls of Da Vinci, our manifesto blends art, science, and spirit.
              </p>
              <div className="aspect-[3/4] rounded-md overflow-hidden border-2 border-border/50 shadow-inner">
                <Image 
                  src="https://placehold.co/600x800.png" 
                  alt="Visual Manifesto Scroll" 
                  width={600} 
                  height={800} 
                  className="w-full h-full object-cover"
                  data-ai-hint="renaissance scroll" 
                />
              </div>
            </div>
          </div>
        </aside>
      </div>

       <section className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          From UN → Collapse → Rise of RPF
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" aria-hidden="true"></div>
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <p className="font-bold text-primary">20th Century</p>
                <h4 className="font-semibold text-lg">Foundations of Global Cooperation</h4>
                <p className="text-sm text-muted-foreground">The United Nations is formed, setting the stage for international dialogue.</p>
              </div>
              <div className="w-1/2 pl-8"></div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-1/2 pl-8 text-left">
                <p className="font-bold text-accent">Early 21st Century</p>
                <h4 className="font-semibold text-lg">The Great Unraveling</h4>
                <p className="text-sm text-muted-foreground">Ecological and social systems face unprecedented stress, revealing the limits of old models.</p>
              </div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 -translate-y-1/2"></div>
            </div>
             <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <p className="font-bold text-primary">The Now</p>
                <h4 className="font-semibold text-lg">The Regenerative Renaissance</h4>
                <p className="text-sm text-muted-foreground">The RPF emerges, weaving together indigenous tech and planetary AI to forge a new covenant.</p>
              </div>
              <div className="w-1/2 pl-8"></div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
