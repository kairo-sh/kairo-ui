import { NgModule } from '@angular/core';
import { KuButtonDirective } from './ku-button.directive';
export * from './ku-button.token';

export * from './ku-button.directive';

@NgModule({
	imports: [KuButtonDirective],
	exports: [KuButtonDirective],
})
export class KuButtonModule {}
