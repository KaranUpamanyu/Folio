import React from "react";
import data from "@/data";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

function PaymentsCard() {
  return (
    <GridItem className="aspect-square">
      <LinkCard {...data.projects.payments} smallCard={true} />
    </GridItem>
  );
}

export default PaymentsCard;
