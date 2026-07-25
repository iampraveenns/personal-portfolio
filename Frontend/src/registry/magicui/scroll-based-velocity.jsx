"use client"

import { cn } from "@/lib/utils"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function ScrollVelocityContainer({ children, className, ...props }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  )
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 5,
  direction = 1,
  scrollReactivity = true,
  className,
  ...props
}) {
  const baseX = useMotionValue(0)
  const scrollContainerRef = useRef(null)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  )

  const [repetitions, setRepetitions] = useState(2)
  const containerRef = useRef(null)

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const viewportWidth = window.innerWidth
        const newRepetitions = Math.ceil(viewportWidth / containerWidth) + 2
        setRepetitions(newRepetitions)
      }
    }

    calculateRepetitions()

    const resizeObserver = new ResizeObserver(calculateRepetitions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    window.addEventListener("resize", calculateRepetitions)

    return () => {
      window.removeEventListener("resize", calculateRepetitions)
      resizeObserver.disconnect()
    }
  }, [])

  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    // pause offscreen / hidden tab
    if (document.hidden) return
    if (scrollContainerRef.current) {
      const rect = scrollContainerRef.current.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 3000)

    if (scrollReactivity) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get()
    }

    baseX.set(baseX.get() + moveBy * direction)
  })

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`)

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      ref={scrollContainerRef}
    >
      <motion.div
        className={cn("inline-flex whitespace-nowrap", className)}
        style={{ x }}
        {...props}
      >
        <span ref={containerRef} className="inline-flex shrink-0">
          {children}
        </span>
        {Array.from({ length: repetitions - 1 }).map((_, i) => (
          <span key={i} className="inline-flex shrink-0">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function wrap(min, max, v) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}