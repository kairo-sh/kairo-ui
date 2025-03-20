import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuDialogComponent } from './ku-dialog.component';
import { KuInputDirective } from '../input';
import { KuDialogModule } from './index';
import { KuLabelDirective } from '../label';
import { KuButtonDirective } from '../button';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/brain/dialog';

const meta: Meta<KuDialogComponent> = {
  title: 'Dialog',
  component: KuDialogComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        KuDialogModule,
        KuLabelDirective,
        KuInputDirective,
        KuButtonDirective,
        BrnDialogTriggerDirective,
        BrnDialogContentDirective,
      ],
    }),
  ],
  render: args => ({
    props: args,
    template: `<ku-dialog>
      <button id="edit-profile" brnDialogTrigger kuBtn>Edit Profile</button>
      <ku-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
        <ku-dialog-header>
          <h3 kuDialogTitle>Edit profile</h3>
          <p kuDialogDescription>Make changes to your profile here. Click save when you're done.</p>
        </ku-dialog-header>
        <div class="py-4 grid gap-4">
          <div class="items-center grid grid-cols-4 gap-4">
            <label kuLabel for="name" class="text-right">Name</label>
            <input kuInput id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="items-center grid grid-cols-4 gap-4">
            <label kuLabel for="username" class="text-right">Username</label>
            <input kuInput id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <ku-dialog-footer>
          <button kuBtn type="submit">Save changes</button>
        </ku-dialog-footer>
      </ku-dialog-content>
    </ku-dialog>`,
  }),
};

export default meta;
type Story = StoryObj<KuDialogComponent>;

export const Primary: Story = {};
