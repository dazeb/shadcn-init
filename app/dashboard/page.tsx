'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useUser } from "@clerk/nextjs"


const growthStages = ['All', 'Indoor', 'Outdoor', 'Vegetation', 'Flowering', 'Harvested']
const shorts = ["24 Overdosin'", "Gelato Auto", "Auto Flower Blue Perched Soda", "Auto Northern Lights", "Orange Sherbet Auto LED", "RQS Hulkberry Auto"]

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Welcome {user?.firstName || 'Grower'}!</h1>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          {growthStages.map((stage) => (
            <TabsTrigger key={stage} value={stage.toLowerCase()}>{stage}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
           <Tabs defaultValue="week1" className="mb-6">
        <TabsList className="grid w-full grid-cols-12 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
            <TabsTrigger key={week} value={`week${week}`} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Week {week}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(8)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-0 relative">
              <Image src={`https://placehold.jp/300x200.png`} alt={`Plant ${i + 1}`} width={300} height={200} className="w-full h-48 object-cover" />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">12 weeks</span>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="font-semibold mb-1">Plant Name {i + 1}</h3>
              <p className="text-sm text-muted-foreground">Grower details...</p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span className="mr-2">2 days ago</span>
                <span>23 comments</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Shorts</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {shorts.map((short, i) => (
          <Card key={i}>
            <CardContent className="p-0">
              <Image src={`https://placehold.jp/150x150.png`} alt={short} width={150} height={150} className="w-full h-36 object-cover" />
            </CardContent>
            <CardFooter className="p-2">
              <p className="text-xs">{short}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
