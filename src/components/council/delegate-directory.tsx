'use client';

import { useState } from 'react';
import type { Delegate } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { Globe, User, Sprout, Cpu, Mountain } from 'lucide-react';

const delegates: Delegate[] = [
  { id: '1', name: 'Aiyana Starlight', title: 'Wisdom Keeper', category: 'Indigenous Nation', bioregion: 'Amazon Rainforest', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Aiyana carries the ancient knowledge of the Amazonian flora and fauna, guiding her community with ancestral wisdom.', proposal: { title: 'Sacred Seed Sovereignty', summary: 'A protocol to protect and share indigenous seeds using a decentralized, on-chain library.' } },
  { id: '2', name: 'Dr. Kenji Tanaka', title: 'Chief Ethicist', category: 'Tech Elder', bioregion: 'Neo-Tokyo Megalopolis', avatarUrl: 'https://placehold.co/100x100.png', bio: 'A former AI pioneer, Dr. Tanaka now dedicates his life to aligning technology with planetary well-being.', proposal: { title: 'The Turing Oath', summary: 'A verifiable credential for AI systems that prove their commitment to non-harm.' } },
  { id: '3', name: 'Zola Nkosi', title: 'Bio-Architect', category: 'Youth Voice', bioregion: 'Great Rift Valley', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Zola designs living buildings that breathe, grow, and integrate seamlessly with their ecosystems.', proposal: { title: 'Mycelial Network Infrastructure', summary: 'Using fungi to create self-healing, intelligent infrastructure for communities.' } },
  { id: '4', name: 'Finnian O\'Connell', title: 'Kelp Farmer', category: 'Bioregion', bioregion: 'North Atlantic Coast', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Finnian stewards the vast underwater forests of the Atlantic, sequestering carbon and restoring marine life.', proposal: { title: 'Blue Carbon Credits 2.0', summary: 'A dynamic DAO to fund and verify oceanic carbon sequestration projects.' } },
  { id: '5', name: 'Lalita Devi', title: 'Water Priestess', category: 'Indigenous Nation', bioregion: 'Ganges River Basin', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Lalita works with communities along the Ganges to restore the spiritual and ecological purity of the sacred river.', proposal: { title: 'Rights of the River', summary: 'Granting legal personhood to the Ganges River, enforced via smart contracts.' } },
  { id: '6', name: 'Marcus Thorne', title: 'Decentralized Systems Architect', category: 'Tech Elder', bioregion: 'Silicon Valley Remnants', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Once a giant of Web2, Marcus now builds the open-source protocols for a decentralized regenerative economy.', proposal: { title: 'Proof-of-Regeneration', summary: 'A new consensus mechanism that rewards verifiable ecological healing actions.' } },
];

const categoryFilters: ('All' | Delegate['category'])[] = ['All', 'Indigenous Nation', 'Tech Elder', 'Youth Voice', 'Bioregion'];

const categoryIcons = {
  'Indigenous Nation': <Sprout className="h-5 w-5 mr-2" />,
  'Tech Elder': <Cpu className="h-5 w-5 mr-2" />,
  'Youth Voice': <User className="h-5 w-5 mr-2" />,
  'Bioregion': <Mountain className="h-5 w-5 mr-2" />,
};


export default function DelegateDirectory() {
  const [filter, setFilter] = useState<typeof categoryFilters[number]>('All');
  const [selectedDelegate, setSelectedDelegate] = useState<Delegate | null>(null);

  const filteredDelegates = filter === 'All' ? delegates : delegates.filter(d => d.category === filter);

  return (
    <div>
      <Card className="mb-8 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-2xl font-semibold">Interactive Globe</h3>
            <p className="text-muted-foreground">Delegate markers coming soon</p>
          </div>
          <div className="mt-4 aspect-video w-full rounded-lg bg-muted flex items-center justify-center border-2 border-dashed">
            <Globe className="h-16 w-16 text-muted-foreground/50" />
             <p className="ml-4 text-muted-foreground">Visualizing our planetary network...</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categoryFilters.map(cat => (
          <Button key={cat} variant={filter === cat ? 'default' : 'secondary'} onClick={() => setFilter(cat)}>
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDelegates.map(delegate => (
          <Card key={delegate.id} className="cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedDelegate(delegate)}>
            <CardHeader className="flex flex-row items-center gap-4">
               <Image src={delegate.avatarUrl} alt={delegate.name} width={64} height={64} className="rounded-full border-2 border-primary/50" data-ai-hint="person portrait" />
              <div>
                <CardTitle className="font-headline text-xl">{delegate.name}</CardTitle>
                <CardDescription>{delegate.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                {categoryIcons[delegate.category as keyof typeof categoryIcons]}
                <span>{delegate.category}</span>
              </div>
               <p className="mt-2 text-sm text-muted-foreground">From the {delegate.bioregion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Dialog open={!!selectedDelegate} onOpenChange={() => setSelectedDelegate(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedDelegate && (
            <>
              <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-8">
                 <Image src={selectedDelegate.avatarUrl} alt={selectedDelegate.name} width={128} height={128} className="rounded-full border-4 border-primary" data-ai-hint="person portrait"/>
                <DialogTitle className="font-headline text-3xl">{selectedDelegate.name}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedDelegate.title} | {selectedDelegate.category}
                  <span className="block text-sm">{selectedDelegate.bioregion}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <p className="text-base text-center mb-6">{selectedDelegate.bio}</p>
                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">Delegate's Regenerative Proposal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold">{selectedDelegate.proposal.title}</h4>
                    <p className="text-muted-foreground">{selectedDelegate.proposal.summary}</p>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}
