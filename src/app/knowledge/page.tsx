import { Library } from "lucide-react";

export default function KnowledgePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Knowledge Realms
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Inspired by Alexandria & Nalanda. Searchable archives of indigenous technologies, scientific breakthroughs, and spiritual philosophies.
        </p>
      </header>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl p-8 border rounded-lg bg-card text-card-foreground shadow-sm flex flex-col items-center text-center">
            <Library className="w-16 h-16 text-primary mb-4" />
            <h2 className="font-headline text-2xl font-bold mb-2">Knowledge Realms Coming Soon</h2>
            <p className="text-muted-foreground">
                Our digital library is under construction. Soon you will be able to explore a vast collection of planetary wisdom.
            </p>
        </div>
      </div>
    </div>
  );
}
