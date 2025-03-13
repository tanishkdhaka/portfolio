import { techStack } from "@/data/TechStack";


const TechStack = () => {
  return (
   <section className="grid md:grid-cols-2 p-3 max-w-screen-lg mx-auto gap-6 ">
        {
            techStack.map((category)=>(
                <div key={category.category} >
                    <h2 className="text-3xl items-center p-2 justify-center text-[#8082F8] flex ">{category.category}</h2>
                    <div className="gap-3 flex flex-col">
                        {
                            category.skills.map(({name, icon: Icon, desc})=>(
                                <div key={name} className="flex text-xl bg-black py-4 px-6 flex-col md:flex-row rounded-xl text-white  justify-between">
                                  <div className="flex gap-2">  <Icon className="w-6 h-6 text-blue-400" /> {name}</div>
                                  <div>{desc}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
   </section>
  );
};

export default TechStack;
{/* <section className="w-full items-center py-10">
      
<div className="flex flex-col gap-6 px-6">
  {techStack.map((category) => (
    <div key={category.category}>
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">
        {category.category}
      </h3>
      <div className="flex flex-col gap-4">
        {category.skills.map(({ name, icon: Icon, desc }) => (
          <div
            key={name}
            className="flex gap-3 p-4 rounded-lg shadow-sm bg-gray-900/80 text-white hover:scale-105 transition"
          >
            <Icon className="w-6 h-6 text-blue-400" />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-xs text-gray-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
</section> */}