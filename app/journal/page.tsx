'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Thermometer, Droplets, Wind, Leaf, Sun, Ruler, Settings } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function GrowJournal() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gorilla Zkittles 3x3</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Add Week</DropdownMenuItem>
            <DropdownMenuItem>Edit Week</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <Tabs defaultValue="week1" className="mb-6">
        <TabsList className="grid w-full grid-cols-12 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
            <TabsTrigger key={week} value={`week${week}`} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Week {week}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Photos & Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full h-[200px]">
              <div className="flex space-x-4 pb-4">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`https://placehold.jp/200x200.png?text=Plant+Photo+${i}`}
                    alt={`Plant photo ${i}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grow Conditions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              <span>Week 4 Flowering</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              <span>30.48 cm height</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              <span>32°C Day Temp</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              <span>12 hrs Light Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5" />
              <span>50% Humidity</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5" />
              <span>Normal Smell</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nutrients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>CANNA Terra Flores</span>
              <div className="w-1/2 bg-primary/20 rounded-full h-2">
                <div className="bg-primary rounded-full h-2 w-3/4"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>CANNA BOOST Accel.</span>
              <div className="w-1/2 bg-primary/20 rounded-full h-2">
                <div className="bg-primary rounded-full h-2 w-1/2"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>MagneCall+</span>
              <div className="w-1/2 bg-primary/20 rounded-full h-2">
                <div className="bg-primary rounded-full h-2 w-1/4"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}