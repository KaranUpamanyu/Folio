// import FooterNavbar from "@/components/FooterNav";
import Navbar from "@/components/Navbar";
import Greeting from "@/components/Greeting";

import Lyearn from "@/components/Cards/Work/LyearnCard";
import Springboard from "@/components/Cards/Work/SpringboardCard";

import GraphQLOptimizationCard from "@/components/Cards/Projects/GraphQLOptimization";

export default function Home() {
  return (
    <main className="w-full mx-auto px-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl relative">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <Greeting />
        <Lyearn />
        <Springboard />
        <GraphQLOptimizationCard />
      </div>
      {/* <FooterNavbar /> */}
    </main>
  );
}
