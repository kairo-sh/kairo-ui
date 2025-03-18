import {Meta, type StoryObj} from '@storybook/angular';
import {KuButtonStoryComponent} from './ku-button.story.component';

const meta: Meta<KuButtonStoryComponent> = {
  title: 'MYBUTTON',
  component: KuButtonStoryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<KuButtonStoryComponent>;

export const Primary: Story = {
}
