import React from "react";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

const image = {
  src: "/images/springboard-home.png",
  alt: "Springboard homepage",
};

function GraphQLOptimizationCard() {
  return (
    <GridItem className="aspect-[2] sm:col-span-2">
      <LinkCard title="How I optimized the homepage's " type="Project" image={image} />
    </GridItem>
  );
}

export default GraphQLOptimizationCard;
