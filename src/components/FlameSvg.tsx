interface Props {
  className?: string
}

// Hand-drawn-feel flame. Sits in the hero corner and sways.
export function FlameSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 8c3 8 10 14 14 22s5 18-2 26c6 0 14-4 16-12 4 14-4 28-14 34-8 6-22 6-30 0-12-8-16-24-10-36 4-8 12-10 14-18 2-6 8-10 12-16z"
        fill="#E8A33D"
      />
      <path
        d="M40 32c3 6 8 11 10 17s2 12-4 17c5 0 10-3 12-9 2 10-4 19-12 23s-18 2-22-6c-4-8-2-18 4-23 4-4 8-7 8-12 0-3 2-5 4-7z"
        fill="#C8301C"
      />
      <path
        d="M40 56c2 3 5 6 6 10s0 8-4 10c4 0 8-2 8-6 2 7-4 13-10 13s-10-4-10-10c0-4 2-8 5-10 2-2 3-4 5-7z"
        fill="#F5EFE4"
      />
    </svg>
  )
}
