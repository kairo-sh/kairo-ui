import { NgModule } from '@angular/core';
import { KuBadgeDirective } from './ku-badge.directive';

export * from './ku-badge.directive';

@NgModule({
	imports: [KuBadgeDirective],
	exports: [KuBadgeDirective],
})
export class KuBadgeModule {}
