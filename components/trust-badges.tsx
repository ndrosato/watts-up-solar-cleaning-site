import { Shield, Award, CheckCircle } from "lucide-react"

interface TrustBadgesProps {
  className?: string
}

export default function TrustBadges({ className = "" }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        <Shield className="mr-2 h-4 w-4" />
        <span>Fully Insured</span>
      </div>
      <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        <Award className="mr-2 h-4 w-4" />
        <span>Certified Technicians</span>
      </div>
      <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        <CheckCircle className="mr-2 h-4 w-4" />
        <span>Satisfaction Guaranteed</span>
      </div>
    </div>
  )
}

