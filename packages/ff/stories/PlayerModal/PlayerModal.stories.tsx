import React from 'react';
import { PlayerModal } from '../../src/components';
import { Story } from '@storybook/react';
import { PlayerInfoModalProps } from '../../src/components/PlayerInfoModal/PlayerModal';
import { setPlayerModalInfo } from '../../src/slices/playerInfoSlice';
import { useDispatch } from 'react-redux';
import { base64Img, testPlayer } from '../PlayerCardView/mockData';

export default {
  title: 'Player Modal',
  component: PlayerModal
};

const Template: Story<PlayerInfoModalProps> = args => {
  const dispatch = useDispatch();
  dispatch(
    setPlayerModalInfo({
      modalInfo: { isModalOpen: true, playerInfo: { ...testPlayer, img: base64Img, playerTeam: 'ARS', playerPos: 'GKP' } }
    })
  );
  return <PlayerModal {...args} />;
};

export const PlayerInfoModalStory = Template.bind({});
PlayerInfoModalStory.args = {};
