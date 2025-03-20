import { Meta, type StoryObj } from '@storybook/angular';
import { KuBadgeDirective } from './ku-badge.directive';

const meta: Meta<KuBadgeDirective> = {
  title: 'Badge',
  component: KuBadgeDirective,
  tags: ['autodocs'],
  render: args => ({
    props: args,
    template: `<a target="_blank" href="https://github.com/goetzrobin/spartan" kuBadge>This is madness. This is spartan.</a>`,
  }),
};

export default meta;
type Story = StoryObj<KuBadgeDirective>;

export const Primary: Story = {};
