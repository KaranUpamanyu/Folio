import React from "react";
import data from "@/data";
// import FooterNavbar from "@/components/FooterNav";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const content = data.projects.homeGraphQL;

export default function GraphQLOptimization() {
  return (
    <main className="w-full mx-auto px-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl relative">
      <Navbar />
      <PageHeader title={content.title} type={content.type} subtitle={""} />
      {/* <FooterNavbar /> */}
    </main>
  );
}
