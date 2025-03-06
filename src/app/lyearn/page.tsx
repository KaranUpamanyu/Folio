// import FooterNavbar from "@/components/FooterNav";
import Springboard from "@/components/Cards/Work/SpringboardCard";
import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";
import PageHeader from "@/components/PageHeader";
import { LyearnContent } from "./const";

export default function LyearnPage() {
  return (
    <>
      <PageHeader title="Lyearn" type="Work" subtitle={LyearnContent} />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <GraphQLOptimizationCard />
        <Springboard />
      </div>
      {/* <FooterNavbar /> */}
    </>
  );
}
