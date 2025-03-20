import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuFormPasswordComponent } from './ku-form-password.component';
import { KuInputModule } from '../../input';
import { KuFormFieldModule } from '../index';

const meta: Meta<KuFormPasswordComponent> = {
  title: 'Form Field/Password',
  component: KuFormPasswordComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [KuFormFieldModule, KuInputModule, KuFormPasswordComponent],
    }),
  ],
  render: args => ({
    props: args,
    template: `
      <div class="w-[20%]">
        <label for="password" kuLabel>Password</label>
        <ku-form-password
          label="Password"
          id="password"
          [formControl]="null" />
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<KuFormPasswordComponent>;

export const Primary: Story = {};
