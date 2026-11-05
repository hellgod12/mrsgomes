import { PricingPlan } from "@/lib/pricing";
import Link from "next/link";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 ${
        plan.popular ? "border-2 border-blue-600 relative" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
        <span className="text-gray-600">/{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
