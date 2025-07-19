import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf, Heart, Globe, BrainCircuit, Users, Sun } from "lucide-react";

const ethos = [
  {
    icon: Leaf,
    title: "Living Systems Wisdom",
    content: "We honor the Earth as a living, intelligent system. Our actions are designed to enhance biodiversity, restore ecosystems, and mimic nature's regenerative cycles. We see technology not as a tool for domination, but as a means to better listen to and co-create with the natural world."
  },
  {
    icon: Heart,
    title: "Biocultural Sovereignty",
    content: "We uphold the rights of all beings and communities to maintain their unique cultural identities and relationships with their ancestral lands. We support the revitalization of indigenous languages, traditions, and stewardship practices as essential pillars of planetary health."
  },
  {
    icon: Globe,
    title: "Planetary Citizenship",
    content: "We recognize our shared responsibility for the well-being of the entire planet. Our governance models transcend nation-state boundaries, fostering bioregional collaboration and a sense of belonging to a single, interconnected global family."
  },
  {
    icon: BrainCircuit,
    title: "Ethical AI & Sacred Tech",
    content: "We develop and deploy artificial intelligence and other advanced technologies in service to life. Our innovations are guided by principles of transparency, equity, and reverence, ensuring they empower communities and enhance ecological harmony without causing harm."
  },
  {
    icon: Users,
    title: "Intergenerational Justice",
    content: "We make decisions with deep consideration for their impact on the next seven generations and with gratitude for the wisdom of our ancestors. We are committed to creating a world where youth feel a profound sense of hope, purpose, and belonging."
  },
  {
    icon: Sun,
    title: "Radical Hope & Courage",
    content: "We choose to act from a place of courage and optimism, even in the face of immense challenges. We believe in humanity's capacity for profound transformation and celebrate every act of regeneration as a seed of a more beautiful future."
  }
];

export default function EthosTree() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {ethos.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border bg-card rounded-lg shadow-sm px-4">
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            <div className="flex items-center gap-4">
              <item.icon className="h-6 w-6 text-accent" />
              <span className="font-headline">{item.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground pl-14 pr-4">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
