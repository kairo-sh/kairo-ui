import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { hlm } from '@spartan-ng/brain/core';
import {
  BrnSelectComponent,
  BrnSelectTriggerDirective,
} from '@spartan-ng/brain/select';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { KuIconDirective } from '../icon';
import { KuInputDirective } from '../input';

/* eslint-disable @angular-eslint/component-selector */

export const selectTriggerVariants = cva(
  'flex items-center justify-between rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
      error: {
        auto: '[&.ng-invalid.ng-touched]:text-destructive [&.ng-invalid.ng-touched]:border-destructive [&.ng-invalid.ng-touched]:focus-visible:ring-destructive',
        true: 'text-destructive border-destructive focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      size: 'default',
      error: 'auto',
    },
  }
);
type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;

@Component({
  selector: 'hlm-select-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BrnSelectTriggerDirective, KuIconDirective, KuInputDirective],
  providers: [provideIcons({ lucideChevronDown })],

  template: `
    <button
      [class]="_computedClass()"
      #button
      kuInput
      brnSelectTrigger
      type="button">
      <ng-content />
      @if (icon()) {
        <ng-content select="ng-icon" />
      } @else {
        <ku-icon
          hlm
          size="sm"
          class="ml-2 flex-none"
          name="lucideChevronDown" />
      }
    </button>
  `,
})
export class HlmSelectTriggerComponent {
  protected readonly icon = contentChild(KuIconDirective);

  protected readonly brnSelect = inject(BrnSelectComponent, { optional: true });

  public readonly _size = input<SelectTriggerVariants['size']>('default');
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected _computedClass = computed(() =>
    hlm(
      selectTriggerVariants({
        size: this._size(),
        error: this.brnSelect?.errorState(),
      }),
      this.userClass()
    )
  );
}
