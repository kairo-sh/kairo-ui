import { NgModule } from '@angular/core';
import { KuIconDirective } from './ku-icon.directive';

export * from './ku-icon.directive';
export * from './ku-icon.token';

@NgModule({
	imports: [KuIconDirective],
	exports: [KuIconDirective],
})
export class KuIconModule {}
