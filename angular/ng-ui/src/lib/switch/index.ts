import { NgModule } from '@angular/core';

import { KuSwitchThumbDirective } from './ku-switch-thumb.directive';
import { KuSwitchComponent } from './ku-switch.component';

export * from './ku-switch-thumb.directive';
export * from './ku-switch.component';

export const HlmSwitchImports = [
  KuSwitchComponent,
  KuSwitchThumbDirective,
] as const;
@NgModule({
  imports: [...HlmSwitchImports],
  exports: [...HlmSwitchImports],
})
export class HlmSwitchModule {}
