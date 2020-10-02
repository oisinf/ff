import React from "react";
import { PlayerCard } from "../src/components";
import { Story } from "@storybook/react";
import { PlayerCardProps } from "../src/components/PlayerCardView/PlayerCard";
export default {
  title: "Player Card",
  component: PlayerCard
};

const Template: Story<PlayerCardProps> = args => <PlayerCard {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  player: {
    web_name: "Test Name",
    photo: "37605.jpg",
    id: 1
  }
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  player: {
    web_name: "Test Name",
    photo: "Fail",
    id: 99999
  }
};
