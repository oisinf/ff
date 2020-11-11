import React from 'react';
import { PlayerCard } from '../../src/components';
import { Story } from '@storybook/react';
import { PlayerCardProps } from '../../src/components/PlayerCardView/PlayerCard';
import { imgFailPlayer, testPlayer } from './mockData';
import { theme } from '../../src/Theme';
import { Grid, ThemeProvider } from '@material-ui/core';
export default {
  title: 'Player Card',
  component: PlayerCard
};
const base64Img =
  'data:image/png;base64,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UmVhZHlxyWU8AAAFK2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNzZCMkI0OTAwNDEyODlCMUZCMDA1QTMwRjg5NjI5OTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODkwM0VDMTZGODYwMTFFQUI1ODI4QjgzN0I1NDE2NEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODkwM0VDMTVGODYwMTFFQUI1ODI4QjgzN0I1NDE2NEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENhbWVyYSBSYXcgMTIuMi4xIChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJTdGFmZiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZkMmQyN2JiLWNmMTctNDY5NS05MTVlLTkyZTY4NTIw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';

const Template: Story<PlayerCardProps> = args => (
  <ThemeProvider theme={theme}>
    <Grid container>
      <PlayerCard {...args} playerTeam="ARS" />
    </Grid>
  </ThemeProvider>
);

export const WithImage = Template.bind({});
WithImage.args = {
  player: testPlayer,
  playerPos: 'GKP',
  img: base64Img
};

export const WithoutImageAndMid = Template.bind({});
WithoutImageAndMid.args = {
  player: imgFailPlayer,
  playerPos: 'MID',
  img: 'not_found'
};

export const Loading = Template.bind({});
Loading.args = {
  player: testPlayer,
  playerPos: 'GKP'
};
