import React from "react";
import data from "@/data";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

function SubscriptionRetryMechanismCard() {
  return (
    <GridItem className="aspect-[2] sm:col-span-2">
      <LinkCard {...data.projects.retryMechanism} />
    </GridItem>
  );
}

export default SubscriptionRetryMechanismCard;
