'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from '@/components/Header'

const growthStages = ['All', 'Indoor', 'Outdoor', 'Vegetation', 'Flowering', 'Harvested']
const shorts = ["Barney's Blue Sunset Sherbet", "First F1 Pineapple Express", "Sour Puffs", "Megh Sea Of Weed", "FastBuds Gorilla Zkittlez", "Powered by kinmen"]

export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Tabs defaultValue="Indoor" className="mb-8">
        <TabsList>
          {growthStages.map((stage) => (
            <TabsTrigger 
              key={stage} 
              value={stage.toLowerCase()} 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {stage}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
           {/* <Tabs defaultValue="week1" className="mb-6">
        <TabsList className="grid w-full grid-cols-12 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
            <TabsTrigger key={week} value={`week${week}`} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Week {week}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(8)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Image src={`https://placehold.jp/300x200.png?text=Plant ${i + 1}`} alt={`Plant ${i + 1}`} width={300} height={200} className="w-full h-48 object-cover" />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold mb-1">Plant Name {i + 1}</h3>
                <p className="text-sm text-muted-foreground">Growth details...</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Shorts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {shorts.map((short, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Image src={`https://placehold.jp/150x150.png?text=Short ${i + 1}`} alt={short} width={150} height={150} className="w-full h-36 object-cover" />
              </CardContent>
              <CardFooter className="p-2">
                <p className="text-xs">{short}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Last Harvested</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {[...Array(8)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Image src={`https://placehold.jp/100x100.png?text=Harvest ${i + 1}`} alt={`Harvest ${i + 1}`} width={100} height={100} className="w-full h-24 object-cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}