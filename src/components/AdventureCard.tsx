import { Link } from 'react-router-dom'
import { Clock, MapPin } from 'lucide-react'

interface Adventure {
  id: number
  name: string
  description: string
  price: number
  duration: string
  location: string
  image?: string
}

interface AdventureCardProps {
  adventure: Adventure
}

const AdventureCard: React.FC<AdventureCardProps> = ({ adventure }) => {
  const { id, name, description, price, duration, location, image } = adventure

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image ? image : "/placeholder.svg"}
        alt={name || "Adventure Image"}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <Link
            to={`/adventures/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdventureCard
