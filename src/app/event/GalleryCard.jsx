import { Users, Calendar, MapPin, TrendingUp } from "lucide-react";

const GalleryCard = ({
  image,
  title,
  event,
  participants,
  location,
  date,
  highlight,
  className = "",
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-sm hover:-translate-y-1 bg-white ${className}`}>

        <div className="`aspect-[4/3]` `sm:aspect-[16/9]` w-full overflow-hidden border border-gray-200 rounded-b-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-gray-900">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {event}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {participants && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#75c13f]/10 px-3 py-1 text-sm text-[#75c13f] font-medium">
              <Users className="h-4 w-4 text-[#75c13f]" />
              {participants}
            </span>
          )}
          {date && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#75c13f]/10 px-3 py-1 text-sm text-[#75c13f] font-medium">
              <Calendar className="h-4 w-4 text-[#75c13f]" />
              {date}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {location && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-[#75c13f]" />
              {location}
            </div>
          )}
          {highlight && (
            <div className="flex items-center gap-1 text-sm text-[#75c13f] font-medium">
              <TrendingUp className="h-4 w-4 text-[#75c13f]" />
              {highlight}
            </div>
          )}
        </div>
      </div>
      
    
    </div>
  );
};

export default GalleryCard;