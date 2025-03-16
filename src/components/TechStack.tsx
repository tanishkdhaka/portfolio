import { techStack } from "@/data/TechStack";


const TechStack = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12 py-12">
    {techStack.map((category) => (
      <div key={category.category}>
        <h2 className="text-3xl items-center mb-4 justify-center text-[#8082F8] flex">
          {category.category}
        </h2>
        <div className="gap-4 flex flex-col">
          {category.skills.map(({ name, icon: Icon, desc }) => (
            <div
              key={name}
              className="flex text-xl py-4 px-6 bg-[#fff5ee] flex-col md:flex-row rounded-lg border-gray-300 border-b-2 justify-between"
            >
              <div className="flex gap-2 items-center">
                <Icon className="w-6 h-6 text-blue-400" /> {name}
              </div>
              <div>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
  
  );
};

export default TechStack;
