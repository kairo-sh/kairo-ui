import { Meta, type StoryObj } from '@storybook/angular';
import { KuSpinnerComponent } from './ku-spinner.component';

const meta: Meta<KuSpinnerComponent> = {
  title: 'Spinner',
  component: KuSpinnerComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<ku-spinner />`
  }),
};

export default meta;
type Story = StoryObj<KuSpinnerComponent>;

export const Primary: Story = {
}
