import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { PlayerModal } from '../../src/components';
import { theme } from '../../src/Theme';
import { Story } from '@storybook/react';
import { PlayerInfoModalProps } from '../../src/components/PlayerInfoModal/PlayerModal';

export default {
  title: 'Player Modal',
  component: PlayerModal
};

const StoryWrapper = (args: PlayerInfoModalProps) => {
  return <PlayerModal {...args} />;
};
const Template: Story<PlayerInfoModalProps> = args => (
  <ThemeProvider theme={theme}>
    <StoryWrapper {...args} />
  </ThemeProvider>
);

export const PlayerInfoModalStory = Template.bind({});
PlayerInfoModalStory.args = {};
