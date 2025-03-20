import { NgModule } from '@angular/core';
import { KuSpinnerComponent } from './ku-spinner.component';

export * from './ku-spinner.component';

@NgModule({
  imports: [KuSpinnerComponent],
  exports: [KuSpinnerComponent],
})
export class KuSpinnerModule {}
