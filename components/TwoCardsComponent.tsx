import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TwoCardsComponent() {
  return (
    <div className="w-full bg-slate-800 p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white rounded-lg overflow-hidden border-2 border-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
            </p>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              KNOW MORE
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg overflow-hidden border-2 border-orange-500">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}