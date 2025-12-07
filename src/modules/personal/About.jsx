import { aboutMe } from "../data/personalData";

function About() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-pink-400 mb-8 border-b border-pink-500/30 pb-2 inline-block">
        {aboutMe.title}
      </h3>

      <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-maven">
        {aboutMe.paragraphs.map((text, index) => (
          <p
            key={index}
            className="hover:text-white transition-colors duration-300"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default About;
