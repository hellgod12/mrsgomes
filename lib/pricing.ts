export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    price: 149,
    period: "per course",
    description: "Perfect for self-paced learners",
    features: [
      "Access to one course",
      "Course materials",
      "Self-paced learning",
      "Email support",
      "Certificate of completion"
    ]
  },
  {
    id: "2",
    name: "Standard",
    price: 299,
    period: "per month",
    description: "Best value for serious learners",
    popular: true,
    features: [
      "Access to all courses",
      "Weekly live sessions",
      "Personalized feedback",
      "Priority support",
      "Community access",
      "Certificates for all courses"
    ]
  },
  {
    id: "3",
    name: "Premium",
    price: 499,
    period: "per month",
    description: "For intensive language mastery",
    features: [
      "All Standard features",
      "1-on-1 tutoring sessions",
      "Custom learning plan",
      "Unlimited practice time",
      "Native speaker practice",
      "Job placement assistance"
    ]
  }
];
