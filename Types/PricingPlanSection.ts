export type Plan = {
    name: string
    price: number
    description: string
    features: string[]
    isPopular?: boolean
    className?: string
}

export type PricingCardProps = {
    plan: Plan
}

export type PricingFeaturesProps = {
    features: string[]
    isPopular: boolean
}