import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pokhara.jpg?height=800&width=1600"
          alt="Adventure Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full mx-auto px-8 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8">
            From paragliding to white water rafting, we offer thrilling
            experiences for every adventure seeker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 bg-primary rounded-[50px]">
            <Link
              to="/adventures"
              className="bg-primary text-primary-foreground rounded-md font-medium text-center hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <button className="bg-[#2485af] text-white px-6 py-3 rounded-md hover:bg-[#2485af]/90 transition-colors active:scale-95">
                Explore Adventures
              </button>
            </Link>
            <a
              href="#featured"
              className="bg-background text-foreground rounded-md font-medium text-center hover:bg-accent transition-colors cursor-pointer"
            >
              <button className="bg-[#2485af] text-white px-6 py-3 rounded-md hover:bg-[#2485af]/90 transition-colors active:scale-95">
                Featured Experiences
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
