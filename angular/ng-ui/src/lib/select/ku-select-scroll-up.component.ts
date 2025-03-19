import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronUp } from '@ng-icons/lucide';
import { KuIconDirective } from '../icon';

@Component({
  selector: 'tr-select-scroll-up',
  standalone: true,
  imports: [NgIcon, KuIconDirective],
  providers: [provideIcons({ lucideChevronUp })],
  host: {
    class: 'flex cursor-default items-center justify-center py-1',
  },
  template: ` <ku-icon hlm size="sm" class="ml-2" name="lucideChevronUp" /> `,
})
export class KuSelectScrollUpComponent {}
