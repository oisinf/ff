import React from 'react';
import { PlayerCard } from '../../src/components';
import { Story } from '@storybook/react';
import { PlayerCardProps } from '../../src/components/PlayerCardView/PlayerCard';
import { imgFailPlayer, testPlayer } from './mockData';
import { theme } from '../../src/Theme';
import { ThemeProvider } from '@material-ui/core';
export default {
  title: 'Player Card',
  component: PlayerCard
};

const Template: Story<PlayerCardProps> = args => (
  <ThemeProvider theme={theme}>
    <PlayerCard {...args} playerTeam="ARS" />
  </ThemeProvider>
);

export const WithImage = Template.bind({});
WithImage.args = {
  player: testPlayer,
  playerPos: 'GKP'
};

export const WithoutImageAndMid = Template.bind({});
WithoutImageAndMid.args = {
  player: imgFailPlayer,
  playerPos: 'MID'
};
