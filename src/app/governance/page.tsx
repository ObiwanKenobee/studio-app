import WisdomPanel from "@/components/governance/wisdom-panel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Vote, FileText, BarChart2 } from "lucide-react";

const proposals = [
    { title: "Sacred Seed Sovereignty", status: "Active" },
    { title: "The Turing Oath for AI", status: "Passed" },
    { title: "Blue Carbon Credits 2.0", status: "Voting" },
    { title: "Rights of the River", status: "Failed" },
]

export default function GovernancePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Planetary DAO Voting
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Engage in our collective decision-making process. Review proposals, consult the AI Wisdom Panel, and cast your vote for a regenerative future.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <WisdomPanel />
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Vote className="h-5 w-5" /> Connect to Vote
                </CardTitle>
                <CardDescription>Connect your Web3 wallet to participate in governance.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full font-bold">Connect Wallet</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Active Proposals
                </CardTitle>
                <CardDescription>Current protocols under review by the DAO.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {proposals.map(p => (
                    <div key={p.title} className="flex justify-between items-center text-sm">
                        <p className="font-semibold">{p.title}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            p.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                            p.status === 'Passed' ? 'bg-green-100 text-green-800' :
                            p.status === 'Voting' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>{p.status}</span>
                    </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <BarChart2 className="h-5 w-5" /> Funding Tracker
                </CardTitle>
                <CardDescription>Live overview of delegate and proposal funding.</CardDescription>
              </CardHeader>
              <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Dashboard coming soon.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
