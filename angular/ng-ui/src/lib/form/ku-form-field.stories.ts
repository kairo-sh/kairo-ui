import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuFormFieldComponent } from './ku-form-field.component';
import { KuInputModule } from '../input';
import { KuFormFieldModule } from './index';

const meta: Meta<KuFormFieldComponent> = {
  title: 'Form Field',
  component: KuFormFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [KuFormFieldModule, KuInputModule],
    }),
  ],
  render: args => ({
    props: args,
    template: `
        <ku-form-field>
            <input class="w-80" kuInput type="email" placeholder="Email" />
            <ku-hint>This is your email address.</ku-hint>
        </ku-form-field>
    `,
  }),
};

export default meta;
type Story = StoryObj<KuFormFieldComponent>;

export const Primary: Story = {};
