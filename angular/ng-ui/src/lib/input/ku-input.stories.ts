import { Meta, type StoryObj } from '@storybook/angular';
import { KuInputDirective } from './ku-input.directive';

const meta: Meta<KuInputDirective> = {
  title: 'Input',
  component: KuInputDirective,
  tags: ['autodocs'],
  render: args => ({
    props: args,
    template: `<input kuInput type="email" placeholder="Email" />`,
  }),
};

export default meta;
type Story = StoryObj<KuInputDirective>;

export const Primary: Story = {};
