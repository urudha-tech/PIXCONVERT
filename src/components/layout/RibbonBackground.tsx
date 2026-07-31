"use client"

import { useProcessing } from "@/context/ProcessingContext"

const BG_RIGHT = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='black'/%3E%3Cpolygon points='0,0 60,60 0,120 22,120 82,60 22,0' fill='white'/%3E%3Cpolygon points='60,0 120,60 60,120 82,120 142,60 82,0' fill='white'/%3E%3C/svg%3E")`
const BG_LEFT  = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='black'/%3E%3Cpolygon points='120,0 60,60 120,120 98,120 38,60 98,0' fill='white'/%3E%3Cpolygon points='60,0 0,60 60,120 38,120 -22,60 38,0' fill='white'/%3E%3C/svg%3E")`

const TOPS = [-8, 7, 22, 37, 52, 67, 82, 97, 112, 127, 142]

export function RibbonBackground() {
  const { isProcessing } = useProcessing()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none bg-white dark:bg-neutral-950" aria-hidden>
      {TOPS.map((top, i) => {
        const isAnimated = i % 2 === 1
        const isRight = Math.floor(i / 2) % 2 === 0

        return isAnimated ? (
          <div
            key={i}
            className="absolute left-[-50%] w-[200%] overflow-hidden"
            style={{ top: `${top}%`, height: "120px", transform: "rotate(-12deg)", transformOrigin: "center center" }}
          >
            <div
              className={isRight ? "ribbon-scroll-right" : "ribbon-scroll-left"}
              style={{
                width: "100%", height: "100%",
                backgroundImage: isRight ? BG_RIGHT : BG_LEFT,
                backgroundSize: "120px 120px",
                backgroundRepeat: "repeat-x",
              }}
            />
          </div>
        ) : (
          <div
            key={i}
            className="absolute left-[-50%] w-[200%]"
            style={{ top: `${top}%`, height: "120px", transform: "rotate(-12deg)", transformOrigin: "center center", background: "black" }}
          />
        )
      })}

      {/* Yellow tint overlay — multiply blend turns white chevrons yellow, black stays black */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: "#FFEB3B",
          mixBlendMode: "multiply",
          opacity: isProcessing ? 1 : 0,
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
