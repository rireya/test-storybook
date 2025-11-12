import type { Meta, StoryObj } from '@storybook/react';
import { McncInput } from './mcncInput';

const meta = {
  title: 'Example/McncInput',
  component: McncInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof McncInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: 'user@example.com',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Just a placeholder',
  },
};
