import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

@Component({
  selector: 'ku-skeleton',
  standalone: true,
  template: '',
  host: {
    '[class]': '_computedClass()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KuSkeletonComponent {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    hlm('block animate-pulse rounded-md bg-muted', this.userClass())
  );
}
