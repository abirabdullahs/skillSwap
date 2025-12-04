import { Link } from "react-router-dom";
import { Eye, Star, DollarSign } from "lucide-react";

const SkillCard = ({ skill }) => {
  const {
    skillId,
    skillName,
    providerName,
    price,
    rating,
    image,
    category,
    description,
    slotsAvailable
  } = skill;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
      data-aos="fade-up"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-40">
        <img
          src={image}
          alt={skillName}
          className="h-full w-full object-cover hover:scale-110 transition duration-300"
        />
        <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
          ${price}
        </div>
        <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white px-3 py-1 text-xs font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
          {skillName}
        </h3>

        {/* Provider */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          by <span className="font-medium">{providerName}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 grow">
          {description}
        </p>

        {/* Rating and Slots */}
        <div className="flex justify-between items-center text-sm mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="font-semibold text-gray-900 dark:text-white">{rating}</span>
          </div>
          <span className={`text-xs font-medium ${slotsAvailable > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {slotsAvailable > 0 ? `${slotsAvailable} slots` : 'Full'}
          </span>
        </div>

        {/* See More Button */}
        <Link
          to={`/skill/${skillId}`}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-200 font-medium flex items-center justify-center gap-2"
        >
          <Eye size={16} />
          See More
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
