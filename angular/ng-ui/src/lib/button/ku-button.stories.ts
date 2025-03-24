import { Meta, type StoryObj } from '@storybook/angular';
import { KuButtonDirective } from './ku-button.directive';

const meta: Meta<KuButtonDirective> = {
  title: 'Button',
  component: KuButtonDirective,
  tags: ['autodocs'],
  render: args => ({
    props: args,
    template: `<button kuBtn>Hello Button</button>`,
  }),
};

export default meta;
type Story = StoryObj<KuButtonDirective>;

export const Primary: Story = {};
