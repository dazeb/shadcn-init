'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, BookOpen, Camera, HelpCircle, Trophy, Users, Leaf, Dna, Droplet, Lightbulb, Tent, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sidebarItems = [
  { name: "Home", icon: Home },
  { name: "Diaries", icon: BookOpen },
  { name: "Shorts", icon: Camera },
  { name: "Questions", icon: HelpCircle },
  { name: "Contests", icon: Trophy },
  { name: "Growers", icon: Users },
  { name: "Strains", icon: Leaf },
  { name: "Breeders", icon: Dna },
  { name: "Nutrients", icon: Droplet },
  { name: "Lights", icon: Lightbulb },
  { name: "Tents", icon: Tent },
  { name: "Blog", icon: BookOpen },
  { name: "English", icon: Globe },
]

const following = [
  { name: "Fast Buds", followers: "28K+" },
  { name: "Liberty H...", followers: "28K+" },
  { name: "Sweet Se...", followers: "28K+" },
  { name: "ViperSpec...", followers: "27K+" },
  { name: "Barney's", followers: "26K+" },
  { name: "Mimosa E...", followers: "26K+" },
  { name: "Gorilla Zk...", followers: "26K+" },
  { name: "Runtz Mu...", followers: "26K+" },
  { name: "Triple Che...", followers: "22K+" },
  { name: "Wedding ...", followers: "18K+" },
  { name: "Sour_D", followers: "54" },
  { name: "Drgreen13", followers: "23" },
  { name: "MR_Roof_K93", followers: "22" },
]

export default function CollapsibleSidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className={`bg-card border-r transition-all duration-300 h-full flex flex-col ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="flex justify-end p-2">
        <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {sidebarItems.map((item) => (
            <Link key={item.name} href="#" className="flex items-center space-x-2 text-sm hover:bg-accent hover:text-accent-foreground rounded p-2">
              <item.icon className="h-4 w-4" />
              {isExpanded && <span>{item.name}</span>}
            </Link>
          ))}
          {isExpanded && (
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Following</h3>
              {following.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm py-1">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground">{item.followers}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}