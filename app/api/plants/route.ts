import { NextResponse } from 'next/server'

// GET /api/plants
export async function GET() {
  // In a real app, you'd fetch this data from a database
  const plants = [
    { id: 1, name: "OG Kush", stage: "Flowering", age: "6 weeks" },
    { id: 2, name: "Blue Dream", stage: "Vegetation", age: "4 weeks" },
  ]
  return NextResponse.json(plants)
}

// POST /api/plants
export async function POST(request: Request) {
  const data = await request.json()
  // In a real app, you'd save this data to a database
  console.log("Received plant data:", data)
  return NextResponse.json({ message: "Plant added successfully", plant: data })
}