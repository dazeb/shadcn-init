"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor, Plus, LeafyGreen, NotebookPen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function NewDiary() {
  const [roomType, setRoomType] = useState("indoor");
  const [isWeekOne, setIsWeekOne] = useState(true);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-emerald-800">New Diary</h1>
      <form className="space-y-8">
        <Card className="border-t-4 border-t-emerald-500">
          <CardHeader className="bg-emerald-50">
            <CardTitle className="flex items-center text-emerald-700">
              <NotebookPen className="mr-2" />
              Diary Name
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Input placeholder="Give it a catchy title" className="text-lg" />
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-emerald-600">
          <CardHeader className="bg-emerald-100">
            <CardTitle className="flex items-center text-emerald-800">
              <LeafyGreen className="mr-2" />
              Strains
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-sm text-emerald-600">
              You can add up to 8 Strains to this Diary
            </p>
            <Button variant="outline" className="w-full justify-start">
              <Plus className="mr-2 h-4 w-4" /> Add Plant Strain
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-emerald-700">
          <CardHeader className="bg-emerald-50">
            <CardTitle className="flex items-center text-emerald-800">
              <Tractor className="mr-2" />
              Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div className="w-[45%] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                    Room Type
                  </h3>
                  <RadioGroup
                    defaultValue="indoor"
                    onValueChange={setRoomType}
                    className="flex flex-wrap gap-4"
                  >
                    {["Indoor", "Outdoor", "Greenhouse"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={type.toLowerCase()}
                          id={type.toLowerCase()}
                        />
                        <Label htmlFor={type.toLowerCase()}>{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {roomType === "indoor" && (
                  <div>
                    <CardTitle className="flex items-center text-emerald-800"></CardTitle>
                    <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                      Grow Tent
                    </h3>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="mr-2 h-4 w-4" /> Add Tent
                    </Button>
                  </div>
                )}

                <div>
                  <CardTitle className="flex items-center text-emerald-800">
                    <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                      Watering
                    </h3>
                  </CardTitle>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Watering Method" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Manual", "Hand Water", "Drip", "Hydro", "Other"].map(
                        (method) => (
                          <SelectItem key={method} value={method.toLowerCase()}>
                            {method}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                    Lighting
                  </h3>
                  <div className="space-y-4">
                    {["Vegetation", "Flowering"].map((stage) => (
                      <div key={stage}>
                        <Label>{stage}</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={`Select Lighting for ${stage}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {["LED", "HPS", "Metal Halide"].map((light) => (
                              <SelectItem
                                key={light}
                                value={light.toLowerCase()}
                              >
                                {light}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator orientation="vertical" className="mx-4" />

              <div className="w-[45%] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                    Technique Used
                  </h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Technique" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Organic", "NFT", "Hydroponics"].map((technique) => (
                        <SelectItem
                          key={technique}
                          value={technique.toLowerCase()}
                        >
                          {technique}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                    Grow Medium
                  </h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Grow Medium" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Soil", "Soilless", "Rockwool", "Peat"].map(
                        (medium) => (
                          <SelectItem key={medium} value={medium.toLowerCase()}>
                            {medium}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {isWeekOne && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                      Germination
                    </h3>
                    <RadioGroup defaultValue="seeds">
                      <div className="flex space-x-4">
                        {["Seeds", "Clones"].map((type) => (
                          <div
                            key={type}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={type.toLowerCase()}
                              id={type.toLowerCase()}
                            />
                            <Label htmlFor={type.toLowerCase()}>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full py-2 bg-black hover:bg-gray-800 text-white"
                  >
                    Create Diary
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
