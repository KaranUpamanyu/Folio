import React from "react";
import data from "@/data";
import GridItem from "@/components/GridItem";
import LinkCard from "@/components/LinkCard";

function ChatbotCard() {
  return (
    <GridItem className="aspect-square">
      <LinkCard {...data.projects.chatbot} smallCard={true} />
    </GridItem>
  );
}

export default ChatbotCard;
