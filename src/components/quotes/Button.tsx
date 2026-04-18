import React from 'react'

type Variant = 'default' | 'outline' | 'ghost'
type Size = 'default' | 'sm' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variants: Record<Variant, string> = {
  default: 'bg-primary-800 text-white hover:bg-primary-900',
  outline: 'border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-50',
  ghost: 'text-gray-700 bg-transparent hover:bg-gray-100',
}

const sizes: Record<Size, string> = {
  default: 'h-9 px-4 py-2 text-sm',
  sm: 'h-8 px-3 py-1.5 text-sm',
  lg: 'h-11 px-8 py-2.5 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export function Button({
  variant = 'default',
  size = 'default',
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(' ')

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>
    return React.cloneElement(child, {
      className: [classes, child.props.className].filter(Boolean).join(' '),
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
