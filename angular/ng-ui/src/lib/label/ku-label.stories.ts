import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuLabelDirective } from './ku-label.directive';
import { KuInputDirective } from '../input';

const meta: Meta<KuLabelDirective> = {
  title: 'Label',
  component: KuLabelDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [KuInputDirective],
    }),
  ],
  render: args => ({
    props: args,
    template: `
    <label kuLabel>E-Mail
      <input class='w-80' kuInput type='email' placeholder='Email'/>
    </label>`,
  }),
};

export default meta;
type Story = StoryObj<KuLabelDirective>;

export const Primary: Story = {};
