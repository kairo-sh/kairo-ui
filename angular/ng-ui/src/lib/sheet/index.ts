import { NgModule } from '@angular/core';

import { KuSheetCloseDirective } from './ku-sheet-close.directive';
import { KuSheetContentComponent } from './ku-sheet-content.component';
import { KuSheetDescriptionDirective } from './ku-sheet-description.directive';
import { KuSheetFooterComponent } from './ku-sheet-footer.component';
import { KuSheetHeaderComponent } from './ku-sheet-header.component';
import { KuSheetOverlayDirective } from './ku-sheet-overlay.directive';
import { KuSheetTitleDirective } from './ku-sheet-title.directive';
import { KuSheetComponent } from './ku-sheet.component';

export * from './ku-sheet-close.directive';
export * from './ku-sheet-content.component';
export * from './ku-sheet-description.directive';
export * from './ku-sheet-footer.component';
export * from './ku-sheet-header.component';
export * from './ku-sheet-overlay.directive';
export * from './ku-sheet-title.directive';
export * from './ku-sheet.component';

export const KuSheetImports = [
	KuSheetComponent,
	KuSheetCloseDirective,
	KuSheetContentComponent,
	KuSheetDescriptionDirective,
	KuSheetFooterComponent,
	KuSheetHeaderComponent,
	KuSheetOverlayDirective,
	KuSheetTitleDirective,
] as const;

@NgModule({
	imports: [...KuSheetImports],
	exports: [...KuSheetImports],
})
export class KuSheetModule {}
