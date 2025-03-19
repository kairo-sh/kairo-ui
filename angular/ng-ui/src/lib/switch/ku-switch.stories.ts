import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuSwitchComponent } from './ku-switch.component';
import { KuLabelDirective } from '../label';

const meta: Meta<KuSwitchComponent> = {
  title: 'Switch',
  component: KuSwitchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [KuLabelDirective]
    })
  ],
  render: (args) => ({
    props: args,
    template: `
        <label class="flex items-center" kuLabel>
            <ku-switch class="mr-2" />
            Airplane mode
        </label>
    `
  }),
};

export default meta;
type Story = StoryObj<KuSwitchComponent>;

export const Primary: Story = {
}
