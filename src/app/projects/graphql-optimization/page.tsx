import React from "react";
import data from "@/data";
// import FooterNavbar from "@/components/FooterNav";
import PageHeader from "@/components/PageHeader";

const content = data.projects.homeGraphQL;

export default function GraphQLOptimization() {
  return (
    <>
      <PageHeader title={content.title} type={content.type} subtitle={""} />
      {/* <FooterNavbar /> */}
    </>
  );
}
