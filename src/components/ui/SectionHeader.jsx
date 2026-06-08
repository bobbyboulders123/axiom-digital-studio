import React from 'react'

const SectionHeader = ({
  label,
  title,
  children,
  description,
  align = 'left',
  variant = 'default',
  className = '',
  headingLevel = 'h2',
}) => {
  const Heading = headingLevel
  const headingContent = title ?? children
  const isCentered = align === 'center'

  return (
    <div className={`${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      <div
        className={`flex w-full max-w-full items-center justify-center gap-3 ${
          variant === 'labelOnly' ? '' : 'mb-7'
        }`}
      >
        <span
          aria-hidden="true"
          className="h-px w-8 shrink-0 bg-gradient-to-r from-transparent to-cyan/55 sm:w-10"
        />
        <span className="min-w-0 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/80">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="h-px w-8 shrink-0 bg-gradient-to-l from-transparent to-cyan/55 sm:w-10"
        />
      </div>

      {variant !== 'labelOnly' && headingContent && (
        <Heading className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {headingContent}
        </Heading>
      )}

      {variant !== 'labelOnly' && description && (
        <p
          className={`mt-6 max-w-md text-base leading-7 text-steel md:text-lg ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
