import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity"
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiCss,
} from "react-icons/si"
import { FaJava, FaCode } from "react-icons/fa"

const skills = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "DSA", icon: <FaCode /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
]

const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
const secondRow = skills.slice(Math.ceil(skills.length / 2))

const SkillCard = ({ name, icon }) => {
    return (
        <figure
            className="relative flex h-32 w-32 cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border p-4 mx-2
            border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]
            dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        >
            <div className="text-4xl dark:text-white">{icon}</div>
            <figcaption className="text-center text-sm font-medium dark:text-white">
                {name}
            </figcaption>
        </figure>
    )
}

export function MarqueeDemo() {
    return (
        <div className="relative flex my-[2rem] w-[90%] lg:w-[80%] mx-auto flex-col items-center justify-around overflow-hidden">
            <h2 className="text-3xl font-bold text-white text-center mb-2 underline decoration-blue-500 underline-offset-8">
                Technical Skills
            </h2>
            <p className="text-white/40 text-center text-sm mt-3 mb-12">
                Programming Languages & Tools Known
            </p>

            <ScrollVelocityContainer className="w-full">
                <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}