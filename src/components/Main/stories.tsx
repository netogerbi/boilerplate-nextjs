import { Meta, StoryObj } from '@storybook/react';

import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  // args and argTypes can come here
};

export default meta;

type Story = StoryObj<typeof Main>;

// export const Basic: Story = (args): JSX.Element => <Main {...args} />; // another possibility

export const Primary: Story = {
  args: {
    title: 'React Advanced',
    description: 'Typescript, ReactJs, NextJS e Styled Components',
  },
};
