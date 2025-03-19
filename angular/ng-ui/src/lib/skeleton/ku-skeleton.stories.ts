import { Meta, type StoryObj } from '@storybook/angular';
import { KuSkeletonComponent } from './ku-skeleton.component';

const meta: Meta<KuSkeletonComponent> = {
  title: 'Skeleton',
  component: KuSkeletonComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `
    <div class='flex items-center p-4 m-4 w-fit space-x-4'>
      <ku-skeleton class='w-12 h-12 rounded-full' />
      <div class='space-y-2'>
        <ku-skeleton class='h-4 w-[250px]' />
        <ku-skeleton class='h-4 w-[200px]' />
      </div>
    </div>`
  }),
};

export default meta;
type Story = StoryObj<KuSkeletonComponent>;

export const Primary: Story = {
}
