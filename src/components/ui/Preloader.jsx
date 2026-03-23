import React from 'react'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05070A]">
      <div className="text-cyan font-mono uppercase tracking-[0.25em] text-sm">
        Loading
      </div>
    </div>
  )
}

export default Preloader