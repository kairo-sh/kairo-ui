import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { KuLabelDirective } from '../label';
import { KuSheetComponent } from './ku-sheet.component';
import { KuSheetContentComponent } from './ku-sheet-content.component';
import { KuSheetHeaderComponent } from './ku-sheet-header.component';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { KuSheetFooterComponent } from './ku-sheet-footer.component';
import { KuSheetTitleDirective } from './ku-sheet-title.directive';
import { KuSheetDescriptionDirective } from './ku-sheet-description.directive';
import { KuButtonDirective } from 'ng-ui';
import { KuInputDirective } from '../input';
import { KuIconDirective } from '../icon';
import { provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

const meta: Meta<KuSheetComponent> = {
  title: 'Sheet',
  component: KuSheetComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BrnSheetTriggerDirective,
        BrnSheetContentDirective,
        KuSheetComponent,
        KuSheetContentComponent,
        KuSheetHeaderComponent,
        KuSheetFooterComponent,
        KuSheetTitleDirective,
        KuSheetDescriptionDirective,
        KuButtonDirective,
        KuInputDirective,
        KuIconDirective,
        KuLabelDirective],
      providers: [provideIcons({ lucideX })],
    }),
],
  render: (args) => ({
    props: args,
    template: `
    <ku-sheet side="right">
      <button id="edit-profile" variant="outline" brnSheetTrigger kuBtn>Edit Profile</button>
      <ku-sheet-content *brnSheetContent="let ctx">
        <ku-sheet-header>
          <h3 kuSheetTitle>Edit Profile</h3>
          <p kuSheetDescription>Make changes to your profile here. Click save when you're done.</p>
        </ku-sheet-header>
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
        <ku-sheet-footer>
          <button kuBtn type="submit">Save Changes</button>
        </ku-sheet-footer>
      </ku-sheet-content>
    </ku-sheet>
    `
  }),
};

export default meta;
type Story = StoryObj<KuSheetComponent>;

export const Primary: Story = {
}
