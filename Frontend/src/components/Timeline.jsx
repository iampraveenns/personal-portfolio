import React, { useEffect, useRef, useState } from 'react'

const timelineData = [
  {
    year: '2018 - 2019',
    side: 'left',
    title: 'Secondary Education',
    description: 'Completed 10th grade at Sri Sathya Sai Matric Hr. Sec. School, Chithode.',
    icon: '🏫',
  },
  {
    year: '2021 - 2022',
    side: 'right',
    title: 'Higher Secondary Education',
    description: 'Completed 12th grade at Sri Sathya Sai Matric Hr. Sec. School, Chithode.',
    icon: '📚',
  },
  {
    year: '2022 - 2025',
    side: 'left',
    title: 'BSc in Information Systems',
    description: 'Joined Kongu Engineering College, Perundurai. Built strong foundations in programming, databases, and computer networks.',
    icon: '🎓',
  },
  {
    year: '2025 - 2027',
    side: 'right',
    title: 'MCA — Rathinam Technical Campus',
    description: 'Pursuing Master of Computer Applications at Rathinam Technical Campus, Coimbatore.',
    icon: '💻',
  },
]

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const isLeft = item.side === 'left'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full mb-12
        ${isLeft ? 'flex-row' : 'flex-row-reverse'}
        transition-all duration-700 ease-out
        ${visible
          ? 'opacity-100 translate-x-0'
          : isLeft
            ? 'opacity-0 -translate-x-16'
            : 'opacity-0 translate-x-16'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content card */}
      <div className={`w-[45%] ${isLeft ? 'text-right pr-6' : 'text-left pl-6'}`}>
        <div className="group relative inline-block w-full">
          {/* Card */}
          <div
            className={`
              bg-[#1a1a2e] border border-white/10 rounded-xl p-4
              shadow-lg hover:shadow-white/10 hover:border-white/30
              transition-all duration-300 hover:-translate-y-1
              cursor-default
            `}
          >
            <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/40 font-mono text-sm italic">{item.year}</span>
            </div>
            <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
          </div>

          {/* Tooltip pointer arrow */}
          <div
            className={`
              absolute top-6 w-3 h-3 bg-[#1a1a2e] border-white/10
              rotate-45 border
              ${isLeft
                ? 'right-3 translate-x-1/2 border-l-0 border-b-0'
                : 'left-3 -translate-x-1/2 border-r-0 border-t-0'
              }
            `}
          />
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div
          className={`
            w-10 h-10 rounded-full border-2 border-white/30
            bg-[#0f0f1a] flex items-center justify-center text-lg
            shadow-[0_0_12px_rgba(255,255,255,0.15)]
            transition-all duration-500
            ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          `}
          style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
          {item.icon}
        </div>
      </div>

      {/* Empty side spacer */}
      <div className="w-[45%]" />
    </div>
  )
}

const Timeline = () => {
  return (
    <section className="py-16 px-4 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-2 underline decoration-blue-500 underline-offset-8">My Journey</h2>
      <p className="text-white/40 text-center text-sm mt-3 mb-12">From school to shipping production apps</p>

      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Timeline