import { ThemeProvider } from '@material-ui/core';
import React, { useReducer } from 'react';
import { PlayerModal } from '../../src/components';
import { theme } from '../../src/Theme';
import { Story } from '@storybook/react';
import { ContainerContext } from '../../src/components/Container/Container';
import reducer, { initialState } from '../../src/reducers/ContainerReducer';
import { PlayerInfoModalProps } from '../../src/components/PlayerInfoModal/PlayerModal';
import { testPlayer } from '../PlayerCardView/mockData';

export default {
  title: 'Player Modal',
  component: PlayerModal
};

const StoryWrapper = (args: PlayerInfoModalProps) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    playerModalInfo: { isModalOpen: true, playerInfo: { ...testPlayer, img: null, playerPos: 'GKP', playerTeam: 'ARS' } }
  });
  return (
    <ContainerContext.Provider value={{ state, dispatch }}>
      <PlayerModal {...args} />
    </ContainerContext.Provider>
  );
};
const Template: Story<PlayerInfoModalProps> = args => (
  <ThemeProvider theme={theme}>
    <StoryWrapper {...args} />
  </ThemeProvider>
);

export const PlayerInfoModalStory = Template.bind({});
PlayerInfoModalStory.args = {};
