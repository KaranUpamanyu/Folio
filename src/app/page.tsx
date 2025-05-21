import type { Metadata } from "next";

import Greeting from "@/components/Greeting";

import Lyearn from "@/components/Cards/Work/LyearnCard";
import Springboard from "@/components/Cards/Work/SpringboardCard";

import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";
import ChatbotCard from "@/components/Cards/Projects/Chatbot";
import PerformanceOptimizationCard from "@/components/Cards/Projects/PerformanceOptimization";
import PaymentsCard from "@/components/Cards/Projects/Payments";
import SubscriptionRetryMechanismCard from "@/components/Cards/Projects/RetryMechanism";

export const metadata: Metadata = {
  title: "Karan Upamanyu | Portfolio",
  description: "Karan's portfolio website",
};

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Greeting />
        <Lyearn />
        <Springboard />
        <ChatbotCard />
        <SubscriptionRetryMechanismCard />
        <PerformanceOptimizationCard />
        <PaymentsCard />
        <GraphQLOptimizationCard />
      </div>
    </>
  );
}
