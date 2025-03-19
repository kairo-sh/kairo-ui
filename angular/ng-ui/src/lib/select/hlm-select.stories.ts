import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import {HlmSelectDirective, KuSelectImports} from './index';

const meta: Meta<HlmSelectDirective> = {
  title: 'Select',
  component: HlmSelectDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ lucideChevronUp, lucideChevronDown })],
      imports: [BrnSelectImports, KuSelectImports]
    })
  ],
  render: (args) => ({
    props: args,
    template: `
    <hlm-select class="inline-block" placeholder="Select an option">
      <hlm-select-trigger class="w-56">
        <hlm-select-value/>
      </hlm-select-trigger>
      <hlm-select-content>
        <hlm-option value="Refresh">Refresh</hlm-option>
        <hlm-option value="Settings">Settings</hlm-option>
        <hlm-option value="Help">Help</hlm-option>
        <hlm-option value="Signout">Sign out</hlm-option>
      </hlm-select-content>
    </hlm-select>
  `
  }),
};

export default meta;
type Story = StoryObj<HlmSelectDirective>;

export const Primary: Story = {
}
