import React from "react";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

const image = {
  src: "/images/lyearn-home.png",
  alt: "Lyearn homepage",
};

function Lyearn() {
  return (
    <GridItem className="aspect-[2] sm:col-span-2">
      <LinkCard title="Lyearn" type="Work" image={image} />
    </GridItem>
  );
}

export default Lyearn;
