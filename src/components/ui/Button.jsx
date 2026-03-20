import React, { useRef, useState } from 'react'

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const baseClasses = "relative overflow-hidden group px-8 py-3.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] outline-none"

  const variants = {
    primary: "bg-gradient-to-r from-electric to-cyan text-white font-semibold border border-transparent shadow-[0_0_20px_rgba(53,208,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,237,0.5)]",
    secondary: "bg-[#0B0F14] text-white font-medium border border-cyan/30 hover:border-cyan/60 shadow-[0_0_15px_rgba(53,208,255,0.1)] hover:shadow-[0_0_20px_rgba(53,208,255,0.25)]"
  }

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {/* Primary tracking glow - deep rich blue interacting with white background */}
      {isHovered && variant === 'primary' && (
        <span
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(47,128,237,0.15), transparent 100%)`
          }}
        />
      )}
      {/* Secondary tracking glow - subtle white reflection */}
      {isHovered && variant === 'secondary' && (
        <span
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 mix-blend-overlay"
          style={{
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 100%)`
          }}
        />
      )}

      <span className="relative z-10 tracking-wide flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}

export default Button
