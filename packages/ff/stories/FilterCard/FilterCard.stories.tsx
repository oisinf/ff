import React from 'react';
import { FilterCard } from '../../src/components';
import { Story } from '@storybook/react';
import { FilterCardProps } from '../../src/components/FilterCard/FilterCard';

export default {
  title: 'Filter Card',
  component: FilterCard
};

const Template: Story<FilterCardProps> = args => {
  return <FilterCard {...args} />;
};

export const FilterCardStory = Template.bind({});
