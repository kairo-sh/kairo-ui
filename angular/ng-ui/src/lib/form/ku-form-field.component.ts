import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  effect,
} from '@angular/core';
import { BrnFormFieldControl } from '@spartan-ng/brain/form-field';
import { KuErrorDirective } from './ku-error.directive';

@Component({
  selector: 'ku-form-field',
  template: `
    <ng-content></ng-content>

    @switch (hasDisplayedMessage()) {
      @case ('error') {
        <ng-content select="ku-error"></ng-content>
      }
      @default {
        <ng-content select="ku-hint"></ng-content>
      }
    }
  `,
  standalone: true,
  host: {
    class: 'space-y-2 block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KuFormFieldComponent {
  public readonly control = contentChild(BrnFormFieldControl);

  public readonly errorChildren = contentChildren(KuErrorDirective);

  protected readonly hasDisplayedMessage = computed<'error' | 'hint'>(() =>
    this.errorChildren() &&
    this.errorChildren().length > 0 &&
    this.control()?.errorState()
      ? 'error'
      : 'hint'
  );

  constructor() {
    effect(() => {
      if (!this.control()) {
        throw new Error('ku-form-field must contain a BrnFormFieldControl.');
      }
    });
  }
}
