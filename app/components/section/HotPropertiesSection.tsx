import { Heart, MessageCircle, Camera, Square } from "lucide-react";

// Assuming you already have the PropertyCard component
import PropertyCard from "../card/PropertyCard";

export default function HotPropertiesSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Browse Hot Properties</h2>

                    <div className="flex bg-white mt-4 sm:mt-0 border p-2">
                        <button className="px-4 py-2  bg-gray-100 border border-gray-200 rounded-l-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                            ALL PROPERTIES
                        </button>
                        <button className="px-4 py-2 bg-white border-t border-b border-gray-300 text-sm font-medium text-gray-700">
                            SALE
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700">
                            RENT
                        </button>
                        <button className="px-4 py-2 bg-white border-t border-r border-b  border-gray-300 rounded-r-lg text-sm font-medium text-gray-700">
                            COMMERCIAL
                        </button>
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 - Gorgeous House For Sale */}
                    <div className="relative group">
                        <PropertyCard
                            imageUrl="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop"
                            title="Gorgeous House For Sale"
                            price={500000}
                            address="40 Journal Square, NJ, USA"
                            beds={2}
                            baths={2}
                            sqft={150}
                            photosCount={13}
                            authorName="John Doe"
                            authorAvatar="https://i.pravatar.cc/150?img=11"
                            isForSale={true}
                        />

                    </div>

                    {/* Card 2 - Placeholder / Coming Soon */}
                    <div className="relative group">
                        <PropertyCard
                            imageUrl="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop"
                            title="Gorgeous House For Sale"
                            price={500000}
                            address="40 Journal Square, NJ, USA"
                            beds={2}
                            baths={2}
                            sqft={150}
                            photosCount={13}
                            authorName="John Doe"
                            authorAvatar="https://i.pravatar.cc/150?img=11"
                            isForSale={true}
                        />

                    </div>

                    {/* Card 3 - Luxury Family Home */}
                    <div className="relative group">
                        <PropertyCard
                            imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
                            title="Luxury Family Home"
                            price={450000}
                            address="W 85th St, New York, USA"
                            beds={2}
                            baths={1}
                            sqft={150}
                            photosCount={7}
                            authorName="Emma Wilson"
                            authorAvatar="https://i.pravatar.cc/150?img=8"
                            isForSale={true}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}