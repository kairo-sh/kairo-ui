import type { ComponentType } from '@angular/cdk/portal';
import { Injectable, type TemplateRef, inject } from '@angular/core';
import {
  type BrnDialogOptions,
  BrnDialogService,
  DEFAULT_BRN_DIALOG_OPTIONS,
  cssClassesToArray,
} from '@spartan-ng/brain/dialog';
import { KuDialogContentComponent } from './ku-dialog-content.component';
import { hlmDialogOverlayClass } from './ku-dialog-overlay.directive';

export type HlmDialogOptions<DialogContext = unknown> = BrnDialogOptions & {
  contentClass?: string;
  context?: DialogContext;
};

@Injectable({
  providedIn: 'root',
})
export class KuDialogService {
  private readonly _brnDialogService = inject(BrnDialogService);

  public open(
    component: ComponentType<unknown> | TemplateRef<unknown>,
    options?: Partial<HlmDialogOptions>
  ) {
    const mergedOptions = {
      ...DEFAULT_BRN_DIALOG_OPTIONS,

      ...(options ?? {}),
      backdropClass: cssClassesToArray(
        `${hlmDialogOverlayClass} ${options?.backdropClass ?? ''}`
      ),
      context: {
        ...(options?.context ?? {}),
        $component: component,
        $dynamicComponentClass: options?.contentClass,
      },
    };

    return this._brnDialogService.open(
      KuDialogContentComponent,
      undefined,
      mergedOptions.context,
      mergedOptions
    );
  }
}
