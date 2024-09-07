'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Home, BookOpen, HelpCircle, Trophy, Users, Leaf, Dna, Beaker, Lightbulb, Tent } from "lucide-react"
import Image from 'next/image';

export function GrowJournal() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 hidden md:block">
        <div className="flex items-center mb-6">
          <Leaf className="h-6 w-6 text-green-600 mr-2" />
          <span className="text-xl font-bold">GrowJournals</span>
        </div>
        <nav className="space-y-2">
          {[
            { icon: Home, label: "Home" },
            { icon: BookOpen, label: "Diaries" },
            { icon: HelpCircle, label: "Questions" },
            { icon: Trophy, label: "Contests" },
            { icon: Users, label: "Growers" },
            { icon: Leaf, label: "Strains" },
            { icon: Dna, label: "Breeders" },
            { icon: Beaker, label: "Nutrients" },
            { icon: Lightbulb, label: "Lights" },
            { icon: Tent, label: "Tents" },
          ].map((item, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="border-b p-4 flex items-center justify-between">
          <Input className="max-w-sm" placeholder="gorilla cookies" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://placehold.jp/150x150.png" />
              <AvatarFallback>GD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Gorilla Zkittles 3x3</h1>
            <Button variant="outline">Settings</Button>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <Avatar className="h-6 w-6">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <span className="font-medium">SOGMASTER</span>
            <Badge variant="outline" className="ml-2">Approved by Barney&apos;s Farm</Badge>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>9</span>
              <span>56</span>
              <span>29</span>
              <span>3365</span>
              <span>2 years ago</span>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Grow Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              {["Gorilla Zkittlez", "Canna", "Plant Magic", "P2000", "70x70x160cm", "Indoor", "ScrOG", "SoG"].map((item, index) => (
                <Badge key={index} variant="secondary">{item}</Badge>
              ))}
            </CardContent>
          </Card>

          <Tabs defaultValue="weeks">
            <TabsList>
              <TabsTrigger value="weeks">WEEKS</TabsTrigger>
              <TabsTrigger value="strain">STRAIN</TabsTrigger>
            </TabsList>
            <TabsContent value="weeks">
              <div className="flex space-x-2 overflow-x-auto py-4">
                {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
                  <Button key={week} variant={week === 3 ? "default" : "outline"} className="rounded-full">
                    {week}
                  </Button>
                ))}
              </div>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://placehold.jp/800x400.png?text=Grow+progress"
                  alt="Grow progress"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            </TabsContent>
            <TabsContent value="strain">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">Gorilla Zkittlez</h3>
                  <p className="text-muted-foreground">Strain information would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}