import React from "react";
import { PlayerCard } from "../src/components";

export default {
  title: "Player Card",
  component: PlayerCard
};

//TODO template args and stuff
export const PlayerCardStory = () => {
  return <PlayerCard player={{ web_name: "Test Name", photo: "test" }} />;
};
