'use client'
import { Heart, Bed, Bath, Square, Camera, MapPin, MoveRight, MoveRightIcon } from 'lucide-react';

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  price: string | number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  photosCount?: number;
  authorName: string;
  authorAvatar: string;
  isForSale?: boolean;
  onClick?: () => void;
}

export default function PropertyCard({
  imageUrl,
  title,
  price,
  address,
  beds,
  baths,
  sqft,
  photosCount = 0,
  authorName,
  authorAvatar,
  isForSale = true,
  onClick,
}: PropertyCardProps) {
  const formattedPrice = typeof price === 'number' ? `$${price.toLocaleString()}` : price;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      {/* Image Section */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />

        {/* Your Original Top-Left Badges - UNTOUCHED */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 text-center">
          <span className={`
            p-2 px-4 rounded-full
            bg-gray-600/45
            text-white font-semibold text-xs uppercase tracking-wider
            backdrop-blur-md
            border border-5 border-white/40
          `}>
            {isForSale ? 'For Sale' : 'For Rent'}
          </span>

          <span className="
            p-2 rounded-full
            bg-gray-600/40
            text-white font-medium text-xs uppercase tracking-wider
            backdrop-blur-md
            border border-5 border-white/40
          ">
            House
          </span>
        </div>

        {/* Heart  */}
        <div className='bg-orange-400'>
          <div
            className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-white/95 rounded-full shadow-xl hover:scale-110 transition-all border-2 border-white/40 backdrop-blur-md cursor-pointer"
          >
            <div className=" backdrop-blur-lg rounded-full p-2 shadow-lg">              <div className='bg-gray-100 rounded-full p-3'>
              <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
            </div>
            </div>
          </div>
        </div>

        {/* Photo Count - Moved to Bottom Right */}
        {photosCount > 0 && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-2  text-white rounded-full text-xl ">
            <Camera className="w-6 h-6 text-orange-500" />
            <span>{photosCount}</span>
          </div>
        )}

        {/* Location - Moved to Bottom Left */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2  px-4 py-2 rounded-full text-white text-sm">
          <MapPin className="w-6 h-6 text-orange-500 " />
          <span className="font-medium">{address}</span>
        </div>
      </div>

      {/* Content - Your Original Style Preserved */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-2xl text-gray-700 mb-4">{formattedPrice}</p>
        <p className='text-md text-gray-700'>Maecenas in pulvinar neque.Nulla finibus lobirtis pulvinar.Lorem ipsum dolor sit amet ,consectetur adipiscing elit.Donec a co...</p>



        <div className="py-5 mt-10 mb-10">
          <div className="flex items-center gap-5">
            {/* Beds */}
            <div className="flex items-center  gap-3 bg-gray-200 px-2 py-1 pr-3 rounded-full">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm">
                <Bed className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-lg font-semibold text-gray-800">{beds}</span>
            </div>

            {/* Baths */}
            <div className="flex items-center gap-3 bg-gray-200 px-2 py-1 pr-3 rounded-full">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm">
                <Bath className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-lg font-semibold text-gray-800">{baths}</span>
            </div>

            {/* Sqft */}
            <div className="flex items-center gap-3 bg-gray-200 px-2  py-1 pr-3 rounded-full">
              <div className="flex items-center justify-center w-12 h-10 bg-white rounded-full shadow-sm">
                <Square className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {sqft.toLocaleString()}
                <span className="text-sm font-normal"> ft²</span>
              </span>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img src={authorAvatar} alt={authorName} className="w-10 h-10 rounded-full object-cover" />
            <span className="text-sm text-gray-600">By {authorName}</span>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black  rounded-full font-bold hover:bg-orange-100 transition">
            VIEW DETAILS
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"    className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          </button>

        </div>
      </div>
    </div>
  );
}