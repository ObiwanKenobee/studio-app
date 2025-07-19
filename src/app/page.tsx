import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import AnimatedMandala from '@/components/home/animated-mandala';
import { ExternalLink, Users, Shield, PlayCircle } from 'lucide-react';

const quotes = [
  {
    quote: "The Earth does not belong to us: we belong to the Earth.",
    author: "Marlee Matlin, Indigenous Elder",
  },
  {
    quote: "True regeneration is not just about technology, but about weaving new stories of kinship between humanity and the planet.",
    author: "Dr. Aris Thorne, Tech Ethicist",
  },
  {
    quote: "Our generation is the bridge between an old world and a new one. Let's build it with courage and hope.",
    author: "Kaelen Rill, Youth Voice",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <p className="max-w-[600px] text-primary font-semibold md:text-xl">
                  Regenerative Planetary Forum (RPF)
                </p>
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Where wisdom meets technology, and Earth becomes the stakeholder.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join a global movement dedicated to sacred civic diplomacy, regeneration, and planetary AI for a thriving future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-bold">
                  <a href="/agora">Join the Council</a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="font-bold">
                   <a href="/projects">Explore Projects</a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="font-bold">
                   <a href="/knowledge">Knowledge Realms <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <AnimatedMandala />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Voices of the Covenant</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the elders, scientists, and youth who are shaping our regenerative future.
              </p>
            </div>
          </div>
          <Carousel className="w-full max-w-4xl mx-auto mt-12" opts={{ loop: true }}>
            <CarouselContent>
              {quotes.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-card/80 backdrop-blur-sm">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <blockquote className="text-xl font-semibold leading-snug lg:text-2xl lg:leading-normal">
                          “{item.quote}”
                        </blockquote>
                        <cite className="mt-4 block font-body text-base text-muted-foreground not-italic">
                          — {item.author}
                        </cite>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">Regenerative Governance</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Our Mission?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are building a new model of global cooperation, grounded in indigenous wisdom and enabled by ethical technology, to heal our relationship with the planet.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <Users className="mt-1 h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Planetary Council</h3>
                  <p className="text-muted-foreground">A Circle of 144 delegates representing diverse bioregions and wisdom traditions.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Shield className="mt-1 h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">Living Codex</h3>
                  <p className="text-muted-foreground">An evolving set of principles for regenerative living and governance, held in a Planetary DAO.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
             <Card className="w-full max-w-md overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-105">
                <div className="relative">
                  <Image src="https://placehold.co/600x400.png" alt="Explainer Video Thumbnail" width={600} height={400} className="w-full" data-ai-hint="earth technology" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-headline text-2xl font-bold">Watch Our Story</h3>
                    <p className="text-sm">Learn about Regenerative Governance</p>
                  </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <PlayCircle className="h-20 w-20 text-white/80 transition-all hover:text-white" />
                  </div>
                </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
