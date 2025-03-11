import React from "react";
import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";
import ChatbotCard from "@/components/Cards/Projects/Chatbot";
import PageHeader from "@/components/PageHeader";
import { LyearnContent } from "./const";

function LyearnPage() {
  return (
    <>
      <PageHeader title="Lyearn" type="Work" subtitle={LyearnContent} />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <ChatbotCard />
        <GraphQLOptimizationCard />
      </div>
    </>
  );
}

export default React.memo(LyearnPage);
