import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLaptopCode, FaCloud 
} from 'react-icons/fa';
import { SiMongodb, SiFastapi, SiPostman } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and high-fidelity user interfaces.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Intermediate" },
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: "Intermediate" }
      ]
    },
    {
      title: "Backend & Databases",
      description: "Developing robust API logic and structuring secure data layers.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-400" />, level: "Intermediate" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: "Intermediate" }
      ]
    },
    {
      title: "Developer Tools",
      description: "Utilizing software systems to optimize coding and distribution pipelines.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: "Advanced" },
        { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Advanced" },
        { name: "VS Code", icon: <FaLaptopCode className="text-blue-400" />, level: "Advanced" },
        { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: "Intermediate" },
        { name: "Cloud / VMs", icon: <FaCloud className="text-sky-400" />, level: "Beginner" }
      ]
    }
  ];



  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#0f172a] border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="text-indigo-400">Skills</span>
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Here are the languages, frameworks, and developer utilities I use for building software.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={catIdx}
              className="bg-[#0b1329] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                
                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skIdx) => (
                    <div 
                      key={skIdx}
                      className="flex items-center justify-between p-3 bg-[#0f172a] rounded-xl border border-slate-800 hover:border-slate-700/80 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </span>
                        <span className="text-slate-200 font-semibold text-sm">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Skill Level Badge */}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced' 
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                          : skill.level === 'Intermediate'
                          ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                          : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                      }`}>
                        {skill.level}
                      </span>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple visual callout for other libraries */}
        <div className="p-6 bg-[#0b1329] border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base">Currently Exploring</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Diving deep into Generative AI, Machine Learning, and LangChain to build intelligent, LLM-powered full stack applications.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs bg-slate-800 text-slate-300 font-medium px-3 py-1.5 rounded-lg border border-slate-700">Gen AI</span>
            <span className="text-xs bg-slate-800 text-slate-300 font-medium px-3 py-1.5 rounded-lg border border-slate-700">Machine Learning</span>
            <span className="text-xs bg-slate-800 text-slate-300 font-medium px-3 py-1.5 rounded-lg border border-slate-700">LangChain</span>
            <span className="text-xs bg-slate-800 text-slate-300 font-medium px-3 py-1.5 rounded-lg border border-slate-700">RAG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
