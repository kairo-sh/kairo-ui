import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  BrnDialogComponent,
  BrnDialogOverlayComponent,
  provideBrnDialogDefaultOptions,
} from '@spartan-ng/brain/dialog';
import { KuDialogOverlayDirective } from './ku-dialog-overlay.directive';

@Component({
  selector: 'ku-dialog',
  standalone: true,
  imports: [BrnDialogOverlayComponent, KuDialogOverlayDirective],
  providers: [
    {
      provide: BrnDialogComponent,
      useExisting: forwardRef(() => KuDialogComponent),
    },
    provideBrnDialogDefaultOptions({
      // add custom options here
    }),
  ],
  template: `
    <brn-dialog-overlay hlm />
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'kuDialog',
})
export class KuDialogComponent extends BrnDialogComponent {}
