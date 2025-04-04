import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'ku-sheet-footer',
  standalone: true,
  template: ` <ng-content /> `,
  host: {
    '[class]': '_computedClass()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KuSheetFooterComponent {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    hlm(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      this.userClass()
    )
  );
}
