// import FooterNavbar from "@/components/FooterNav";
import Greeting from "@/components/Greeting";

import Lyearn from "@/components/Cards/Work/LyearnCard";
import Springboard from "@/components/Cards/Work/SpringboardCard";

import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <Greeting />
        <Lyearn />
        <Springboard />
        <GraphQLOptimizationCard />
      </div>
      {/* <FooterNavbar /> */}
    </>
  );
}
