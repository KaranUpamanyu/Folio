import FooterNavbar from "@/components/FooterNav";
import Navbar from "@/components/Navbar";
import Springboard from "@/components/Springboard";
import PageHeader from "@/components/PageHeader";
import { LyearnContent } from "./const";

export default function LyearnPage() {
  return (
    <main className="w-full mx-auto px-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl relative">
      <Navbar />
      <PageHeader title="Lyearn" type="Work" subtitle={LyearnContent} />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        <Springboard />
        <Springboard />
      </div>
      {/* <FooterNavbar /> */}
    </main>
  );
}
