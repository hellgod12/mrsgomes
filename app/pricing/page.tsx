import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { pricingPlans } from "@/lib/pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Choose the plan that works best for your learning journey
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee for all new subscriptions. Contact us if you're not satisfied.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Are certificates included?
              </h3>
              <p className="text-gray-600">
                Yes, all plans include certificates upon successful course completion.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I access courses offline?
              </h3>
              <p className="text-gray-600">
                Course materials can be downloaded for offline access in the Standard and Premium plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
