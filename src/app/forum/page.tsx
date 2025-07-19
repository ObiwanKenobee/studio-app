import InitiativeForm from "@/components/forum/initiative-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const events = [
    { title: "RPF 01: A New Covenant", location: "Digital & Sacred Valley, Peru", status: "Upcoming" },
    { title: "Bioregional Weaving: Cascadia", location: "Virtual", status: "Ongoing" },
    { title: "Ancestral Tech Symposium", location: "Timbuktu, Mali", status: "Past" },
]

export default function ForumPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Forum & Events
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Connect with the community at our sacred digital and physical gatherings. Showcase your work and find collaborators.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
            <div>
                <h2 className="font-headline text-3xl font-bold mb-6">Featured Events</h2>
                <div className="space-y-6">
                    {events.map(event => (
                        <Card key={event.title}>
                           <div className="flex items-center p-4">
                             <Image src="https://placehold.co/150x100.png" alt={event.title} width={150} height={100} className="rounded-md mr-4 hidden sm:block" data-ai-hint="conference landscape" />
                             <div className="flex-1">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full mb-2 inline-block ${
                                    event.status === "Upcoming" ? "bg-blue-100 text-blue-800" :
                                    event.status === "Ongoing" ? "bg-yellow-100 text-yellow-800" :
                                    "bg-gray-100 text-gray-800"
                                }`}>{event.status}</span>
                               <h3 className="font-semibold text-lg">{event.title}</h3>
                               <p className="text-sm text-muted-foreground">{event.location}</p>
                               <div className="mt-2 space-x-2">
                                 <Button size="sm" disabled={event.status !== "Upcoming"}>Register</Button>
                                 <Button size="sm" variant="secondary" disabled={event.status !== "Ongoing"}>View Livestream</Button>
                               </div>
                             </div>
                           </div>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="sticky top-24">
                <Card className="bg-secondary/30">
                    <CardHeader>
                        <CardTitle className="font-headline">Showcase Your Initiative</CardTitle>
                        <CardDescription>Share your local regenerative project with the planetary council and community. Let's weave our efforts together.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <InitiativeForm />
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </>
  );
}
