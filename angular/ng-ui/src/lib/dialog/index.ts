import { NgModule } from '@angular/core';

import { KuDialogCloseDirective } from './ku-dialog-close.directive';
import { KuDialogContentComponent } from './ku-dialog-content.component';
import { KuDialogDescriptionDirective } from './ku-dialog-description.directive';
import { KuDialogFooterComponent } from './ku-dialog-footer.component';
import { KuDialogHeaderComponent } from './ku-dialog-header.component';
import { KuDialogOverlayDirective } from './ku-dialog-overlay.directive';
import { KuDialogTitleDirective } from './ku-dialog-title.directive';
import { KuDialogComponent } from './ku-dialog.component';

export * from './ku-dialog-close.directive';
export * from './ku-dialog-content.component';
export * from './ku-dialog-description.directive';
export * from './ku-dialog-footer.component';
export * from './ku-dialog-header.component';
export * from './ku-dialog-overlay.directive';
export * from './ku-dialog-title.directive';
export * from './ku-dialog.component';
export * from './ku-dialog.service';

export const KuDialogImports = [
	KuDialogComponent,
	KuDialogCloseDirective,
	KuDialogContentComponent,
	KuDialogDescriptionDirective,
	KuDialogFooterComponent,
	KuDialogHeaderComponent,
	KuDialogOverlayDirective,
	KuDialogTitleDirective,
] as const;

@NgModule({
	imports: [...KuDialogImports],
	exports: [...KuDialogImports],
})
export class KuDialogModule {}
