import Image from "next/image"

interface TechBadgeProps {
  logoUrl: string
  name: string
}

export default function TechBadge({ logoUrl, name }: TechBadgeProps) {
  return (
    <div
      className="flex w-20 md:w-28 flex-col items-center gap-3 p-2 md:p-4 transition-all duration-200 hover:scale-110"
    >
      <Image src={logoUrl || "/placeholder.svg"} alt={`${name} logo`} width={50} height={50} />
      <span className="text-sm font-medium tracking-wide">
        {name}
      </span>
    </div>
  )
}

