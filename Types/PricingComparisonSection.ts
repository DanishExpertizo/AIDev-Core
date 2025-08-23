export type Plan = {
    name: "Starter" | "Professional" | "Organization";
    price: string;
    period: string;
    billing: string;
    buttonText: string;
    buttonStyle: string;
    highlighted: boolean;
}

export type FeatureItem = {
    name: string;
    starter: boolean;
    professional: boolean;
    organization: boolean;
}

export type FeatureCategory = {
    category: string;
    items: FeatureItem[];
}

export type MobilePlanCardProps = {
    plan: Plan
    features: FeatureCategory[]
}

export type FeatureCategoryBlockProps = {
    category: FeatureCategory
}

export type FeatureRowProps = {
    feature: FeatureItem
}

export type PlanHeaderProps = {
    plan: Plan
}