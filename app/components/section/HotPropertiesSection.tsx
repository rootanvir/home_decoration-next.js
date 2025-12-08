import PropertyCard from "../card/PropertyCard";

export default function HotPropertiesSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header + Filter Tabs */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-0">
                        Browse Hot Properties
                    </h2>

                    {/* Filter Buttons - 4 equal columns on mobile, inline on desktop */}
                    <div className="grid grid-cols-4 lg:flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <button className="px-3 py-3 bg-gray-100 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                            ALL PROPERTIES
                        </button>
                        <button className="px-3 py-3 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition border-l border-gray-200">
                            SALE
                        </button>
                        <button className="px-3 py-3 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition border-l border-gray-200">
                            RENT
                        </button>
                        <button className="px-3 py-3 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition border-l border-gray-200">
                            COMMERCIAL
                        </button>
                    </div>
                </div>

                {/* Properties Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Add this wrapper div to EVERY card */}
                    <div className="flex">
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

                    <div className="flex">
                        <PropertyCard
                            imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                            title="Modern Apartment Downtown"
                            price={720000}
                            address="123 Main St, Manhattan, NY"
                            beds={3}
                            baths={2}
                            sqft={210}
                            photosCount={18}
                            authorName="Sarah Lee"
                            authorAvatar="https://i.pravatar.cc/150?img=5"
                            isForSale={true}
                        />
                    </div>

                    <div className="flex">
                        <PropertyCard
                            imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
                            title="Luxury Family Home"
                            price={450000}
                            address="W 85th St, New York, USA"
                            beds={4}
                            baths={3}
                            sqft={280}
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