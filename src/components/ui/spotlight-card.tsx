import React, { useEffect, useRef, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'electricBlue' | 'midnight' | 'steel' | 'ice';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  cyan: { base: 190, spread: 30 },
  electricBlue: { base: 215, spread: 24 },
  midnight: { base: 225, spread: 12 },
  steel: { base: 205, spread: 10 },
  ice: { base: 198, spread: 16 },
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'electricBlue',
  size = 'md',
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty('--x', x.toFixed(2));
      cardRef.current.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(2));
      cardRef.current.style.setProperty('--y', y.toFixed(2));
      cardRef.current.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(2));
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      '--base': base,
      '--spread': spread,
      '--radius': '18',
      '--border': '1.5',
      '--backdrop': 'hsl(215 24% 16% / 0.34)',
      '--backup-border': 'hsl(215 20% 24% / 0.34)',
      '--size': '220',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      '--saturation': '100',
      '--lightness': '62',
      '--bg-spot-opacity': '0.12',
      '--border-spot-opacity': '0.95',
      '--border-light-opacity': '0.82',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 62) * 1%) / var(--bg-spot-opacity, 0.12)),
        transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize:
        'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    } as React.CSSProperties;

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }

    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }

    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 1.15) calc(var(--spotlight-size) * 1.15) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 60% / var(--border-spot-opacity, 0.95)),
        transparent 100%
      );
      filter: brightness(1.8) saturate(1.2);
      z-index: 10;
    }

    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.62) calc(var(--spotlight-size) * 0.62) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 76% / var(--border-light-opacity, 0.82)),
        transparent 100%
      );
      filter: blur(2px) saturate(1.15);
      z-index: 11;
    }

    [data-glow] > [data-glow] {
      position: absolute;
      inset: 0;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      pointer-events: none;
      z-index: 0;
    }

    [data-glow] > [data-glow]::before,
    [data-glow] > [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: -12px;
      border-radius: calc(var(--radius) * 1px);
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    [data-glow] > [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.72) calc(var(--spotlight-size) * 0.72) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 60% / 0.24),
        transparent 100%
      );
      filter: blur(18px) saturate(1.15);
    }

    [data-glow] > [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.44) calc(var(--spotlight-size) * 0.44) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 74% / 0.14),
        transparent 100%
      );
      filter: blur(24px);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl
          relative
          flex flex-col
          shadow-[0_1rem_2rem_-1rem_black]
          p-8
          gap-4
          backdrop-blur-[10px]
          ${className}
        `}
      >
        <div data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard };