import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  BrnDialogComponent,
  provideBrnDialogDefaultOptions,
} from '@spartan-ng/brain/dialog';
import {
  BrnSheetComponent,
  BrnSheetOverlayComponent,
} from '@spartan-ng/brain/sheet';
import { KuSheetOverlayDirective } from './ku-sheet-overlay.directive';

@Component({
  selector: 'ku-sheet',
  standalone: true,
  imports: [BrnSheetOverlayComponent, KuSheetOverlayDirective],
  providers: [
    {
      provide: BrnDialogComponent,
      useExisting: forwardRef(() => BrnSheetComponent),
    },
    {
      provide: BrnSheetComponent,
      useExisting: forwardRef(() => KuSheetComponent),
    },
    provideBrnDialogDefaultOptions({
      // add custom options here
    }),
  ],
  template: `
    <brn-sheet-overlay hlm />
    <ng-content />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'kuSheet',
})
export class KuSheetComponent extends BrnSheetComponent {}
