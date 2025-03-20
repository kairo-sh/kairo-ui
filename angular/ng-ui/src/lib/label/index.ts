import { NgModule } from '@angular/core';
import { KuLabelDirective } from './ku-label.directive';

export * from './ku-label.directive';

@NgModule({
  imports: [KuLabelDirective],
  exports: [KuLabelDirective],
})
export class KuLabelModule {}
