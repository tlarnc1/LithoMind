"use client"

import { useEffect, useRef } from "react"

export function SeismicWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerY = rect.height / 2

      ctx.beginPath()
      ctx.strokeStyle = "#D4D4D4"
      ctx.lineWidth = 1

      for (let x = 0; x < rect.width; x++) {
        const progress = x / rect.width
        
        const wave1 = Math.sin((progress * 4 + time * 0.3) * Math.PI) * 6
        const wave2 = Math.sin((progress * 7 + time * 0.5) * Math.PI) * 3
        const wave3 = Math.sin((progress * 12 + time * 0.2) * Math.PI) * 1.5
        
        const fade = Math.sin(progress * Math.PI)
        const y = centerY + (wave1 + wave2 + wave3) * fade

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      time += 0.006
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-16 opacity-50"
      style={{ display: "block" }}
    />
  )
}
