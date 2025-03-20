import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { KuIconDirective } from '../icon';

/* eslint-disable @angular-eslint/component-selector */

@Component({
  selector: 'hlm-select-scroll-down',
  standalone: true,
  imports: [KuIconDirective],
  providers: [provideIcons({ lucideChevronDown })],
  host: {
    class: 'flex cursor-default items-center justify-center py-1',
  },
  template: ` <ku-icon hlm size="sm" class="ml-2" name="lucideChevronDown" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HlmSelectScrollDownComponent {}
