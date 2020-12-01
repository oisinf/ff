import React from 'react';
import { PlayerCard } from '../../src/components';
import { Story } from '@storybook/react';
import { PlayerCardProps } from '../../src/components/PlayerCardView/PlayerCard';
import { imgFailPlayer, testPlayer, base64Img } from './mockData';
import { Grid } from '@material-ui/core';
import MockAdapter from 'axios-mock-adapter';
import AxiosMock from '../utils/AxiosMock';

export default {
  title: 'Player Card',
  component: PlayerCard
};

const Template: Story<PlayerCardProps & { mock: (api: MockAdapter) => void }> = args => {
  return (
    <AxiosMock mock={args.mock}>
      <Grid container>
        <PlayerCard {...args} playerTeam="ARS" />
      </Grid>
    </AxiosMock>
  );
};

export const WithImage = Template.bind({});
WithImage.args = {
  player: testPlayer,
  playerPos: 'GKP',
  mock: (apiMock: MockAdapter) => {
    apiMock.onGet(`png/37605.jpg`).reply(200, base64Img);
  }
};

export const WithoutImageAndMid = Template.bind({});
WithoutImageAndMid.args = {
  player: imgFailPlayer,
  playerPos: 'MID',
  mock: (apiMock: MockAdapter) => {
    apiMock.onGet(`png/fail.jpg`).reply(500);
  }
};

export const Loading = Template.bind({});
Loading.args = {
  player: { ...testPlayer, photo: '37605.jpg' },
  playerPos: 'GKP',
  mock: (apiMock: MockAdapter) => {
    apiMock.onGet(`png/37605.jpg`).reply(404);
  }
};
