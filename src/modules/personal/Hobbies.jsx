import { interests } from "../data/personalData";
import ParallaxTilt from "react-parallax-tilt";

function Hobbies() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((item, index) => (
          <ParallaxTilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <div className="bg-gray-900/50 border border-purple-500/20 p-8 rounded-2xl h-full hover:border-pink-500/50 transition-all duration-300 group">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-2xl font-bold text-purple-300 group-hover:text-pink-300 transition-colors mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 group-hover:text-gray-200">
                {item.description}
              </p>
            </div>
          </ParallaxTilt>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
