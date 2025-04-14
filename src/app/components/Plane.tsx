"use client";
import React, { useState } from "react";
import DarkStrip from "./spacing";

const ChooseYourLane = () => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
    "monthly"
  );

  const tiers = [
    {
      id: 1, // Add unique ID
      tier: "Tier 1",
      title: "Public+",
      monthlyPrice: 2.99,
      annualPrice: 29.99,
      features: [
        "Access to Help and Help FAQ",
        "Monthly Public Car Updates",
        "Basic server access",
        "Limited car selection",
      ],
      buttonText: "Subscribe",
      popular: false,
      accentColor: "gray",
    },
    {
      id: 2, // Add unique ID
      tier: "Tier 2",
      title: "VIP",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "All Tier 1 benefits",
        "Exclusive VIP servers",
        "Weekly car updates",
        "Priority support",
        "Early access to events",
        "Custom player tag",
      ],
      buttonText: "Upgrade",
      popular: true,
      accentColor: "gray",
    },
    {
      id: 3, // Add unique ID
      tier: "Tier 3",
      title: "Elite",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        "All VIP benefits",
        "Private racing sessions",
        "Daily car updates",
        "24/7 dedicated support",
        "Custom car skins",
        "Exclusive Discord channels",
        "Developer Q&A access",
      ],
      buttonText: "Join Elite",
      popular: false,
      accentColor: "purple",
    },
    {
      id: 4, // Add unique ID
      tier: "Tier 4",
      title: "Elite+",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        "All Elite benefits",
        "Exclusive car designs",
        "VIP racing events",
        "Direct developer feedback",
      ],
      buttonText: "Join Elite+",
      popular: false,
      accentColor: "blue",
    },
  ];

  const getPrice = (monthly: number, annual: number) =>
    selectedPlan === "monthly" ? monthly : annual;

  const getSavings = (monthly: number, annual: number) =>
    Math.round((1 - annual / (monthly * 12)) * 100);

  return (
    <div className="bg-gray-1000 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
            CHOOSE YOUR
            <br />
            <span className="text-green-400">PLANE</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Enhance your No Hesi experience with VIP
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-lg flex">
            <button
              className={`px-8 py-3 rounded-md text-lg font-medium transition-all ${
                selectedPlan === "monthly"
                  ? "bg-green-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setSelectedPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-8 py-3 rounded-md text-lg font-medium transition-all ${
                selectedPlan === "annual"
                  ? "bg-green-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setSelectedPlan("annual")}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/20 text-green-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            Save up to {getSavings(tiers[0].monthlyPrice, tiers[0].annualPrice)}
            %
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`bg-gray-900 border-2 rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                tier.popular
                  ? "border-gray-700 hover:shadow-gray-500/20 transform hover:scale-[1.02]"
                  : `border-gray-700 hover:border-${tier.accentColor}-500`
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gray-700 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                  POPULAR
                </div>
              )}

              <div className="text-sm text-gray-400 font-semibold uppercase mb-1">
                {tier.tier}
              </div>

              <h3 className="text-2xl font-bold">{tier.title}</h3>

              <div className="my-4">
                <span className="text-4xl font-extrabold">
                  ${getPrice(tier.monthlyPrice, tier.annualPrice)}
                </span>
                <span className="text-gray-400 ml-1">
                  {selectedPlan === "monthly" ? "/month" : "/year"}
                </span>
                {selectedPlan === "annual" && (
                  <p className="text-green-400 text-sm mt-1">
                    Save $
                    {(tier.monthlyPrice * 12 - tier.annualPrice).toFixed(2)}{" "}
                    annually
                  </p>
                )}
              </div>

              <button
                className={`w-full font-semibold py-3 px-4 rounded-xl transition ${
                  tier.popular
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {tier.buttonText}
              </button>

              <div className="mt-8 border-t border-gray-700 pt-4">
                <div className="text-lg font-semibold mb-2">Get a taste</div>
                <div className="space-y-6 text-sm text-gray-300">
                  {tier.features.map((feature, index) => (
                    <p
                      key={index}
                      className="flex items-start border-b border-gray-700 pb-2 last:border-none"
                    >
                      <span
                        className={`text-${tier.accentColor}-400 mr-2`}
                      ></span>{" "}
                      {/* Removed the bullet symbol */}
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourLane;
