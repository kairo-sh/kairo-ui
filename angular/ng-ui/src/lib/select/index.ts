import { NgModule } from '@angular/core';
import { KuSelectContentDirective } from './ku-select-content.directive';
import { KuSelectGroupDirective } from './ku-select-group.directive';
import { KuSelectLabelDirective } from './ku-select-label.directive';
import { KuSelectOptionComponent } from './ku-select-option.component';
import { KuSelectScrollDownComponent } from './ku-select-scroll-down.component';
import { KuSelectScrollUpComponent } from './ku-select-scroll-up.component';
import { KuSelectTriggerComponent } from './ku-select-trigger.component';
import { KuSelectValueDirective } from './ku-select-value.directive';
import { KuSelectDirective } from './ku-select.directive';

export * from './ku-select-content.directive';
export * from './ku-select-group.directive';
export * from './ku-select-label.directive';
export * from './ku-select-option.component';
export * from './ku-select-scroll-down.component';
export * from './ku-select-scroll-up.component';
export * from './ku-select-trigger.component';
export * from './ku-select-value.directive';
export * from './ku-select.directive';

export const KuSelectImports = [
	KuSelectContentDirective,
	KuSelectTriggerComponent,
	KuSelectOptionComponent,
	KuSelectValueDirective,
	KuSelectDirective,
	KuSelectScrollUpComponent,
	KuSelectScrollDownComponent,
	KuSelectLabelDirective,
	KuSelectGroupDirective,
] as const;

@NgModule({
	imports: [...KuSelectImports],
	exports: [...KuSelectImports],
})
export class KuSelectModule {}
