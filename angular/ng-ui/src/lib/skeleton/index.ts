import { NgModule } from '@angular/core';
import { KuSkeletonComponent } from './ku-skeleton.component';

export * from './ku-skeleton.component';

@NgModule({
  imports: [KuSkeletonComponent],
  exports: [KuSkeletonComponent],
})
export class HlmSkeletonModule {}
