import React from 'react';
import { FilterCard } from '../../src/components';
import { Story } from '@storybook/react';
import { theme } from '../../src/Theme';
import { ThemeProvider } from '@material-ui/core';
import { FilterCardProps } from '../../src/components/FilterCard/FilterCard';

export default {
  title: 'Filter Card',
  component: FilterCard
};

const Template: Story<FilterCardProps> = args => {
  return (
    <ThemeProvider theme={theme}>
      <FilterCard {...args} />
    </ThemeProvider>
  );
};

export const FilterCardStory = Template.bind({});
