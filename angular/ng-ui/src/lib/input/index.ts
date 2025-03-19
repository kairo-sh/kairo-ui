import { NgModule } from '@angular/core';
import { KuInputErrorDirective } from './ku-input-error.directive';
import { KuInputDirective } from './ku-input.directive';

export * from './ku-input-error.directive';
export * from './ku-input.directive';

@NgModule({
	imports: [KuInputDirective, KuInputErrorDirective],
	exports: [KuInputDirective, KuInputErrorDirective],
})
export class KuInputModule {}
