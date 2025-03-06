import React from "react";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

const image = {
  src: "/images/springboard-home.png",
  alt: "Springboard homepage",
};

function Springboard() {
  return (
    <GridItem className="aspect-[2] sm:col-span-2">
      <LinkCard title="Springboard" type="Work" image={image} />
    </GridItem>
  );
}

export default Springboard;
