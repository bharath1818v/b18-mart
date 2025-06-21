import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Upload } from "lucide-react";

export default function B18Market() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">
          B18 Market <span className="text-sm text-purple-500">— Sell Anything</span>
        </h1>
        <p className="mt-2 text-gray-600">Electronics, Shoes, Clothes, and More</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="rounded-2xl shadow-lg border-purple-300 border">
            <CardContent className="p-4">
              <img
                src={`https://via.placeholder.com/300x200?text=Item+${item}`}
                alt={`Item ${item}`}
                className="rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-purple-800">Product 18{item}</h2>
              <p className="text-gray-500">This is a sample item description.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-purple-600 font-bold">₹1800</span>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <div className="mt-10 text-center">
        <Button className="bg-white border border-purple-500 text-purple-600 hover:bg-purple-50">
          <Upload className="mr-2 h-4 w-4" /> Sell on B18 Market
        </Button>
        <p className="text-xs mt-2 text-gray-400">Earn commission on every sold item</p>
      </div>
    </div>
  );
}
