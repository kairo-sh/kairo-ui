import { NgModule } from '@angular/core';
import { HlmSelectContentDirective } from './hlm-select-content.directive';
import { HlmSelectGroupDirective } from './hlm-select-group.directive';
import { HlmSelectLabelDirective } from './hlm-select-label.directive';
import { HlmSelectOptionComponent } from './hlm-select-option.component';
import { HlmSelectScrollDownComponent } from './hlm-select-scroll-down.component';
import { HlmSelectScrollUpComponent } from './hlm-select-scroll-up.component';
import { HlmSelectTriggerComponent } from './hlm-select-trigger.component';
import { HlmSelectValueDirective } from './hlm-select-value.directive';
import { HlmSelectDirective } from './hlm-select.directive';

export * from './hlm-select-content.directive';
export * from './hlm-select-group.directive';
export * from './hlm-select-label.directive';
export * from './hlm-select-option.component';
export * from './hlm-select-scroll-down.component';
export * from './hlm-select-scroll-up.component';
export * from './hlm-select-trigger.component';
export * from './hlm-select-value.directive';
export * from './hlm-select.directive';

export const KuSelectImports = [
  HlmSelectContentDirective,
  HlmSelectTriggerComponent,
  HlmSelectOptionComponent,
  HlmSelectValueDirective,
  HlmSelectDirective,
  HlmSelectScrollUpComponent,
  HlmSelectScrollDownComponent,
  HlmSelectLabelDirective,
  HlmSelectGroupDirective,
] as const;

@NgModule({
  imports: [...KuSelectImports],
  exports: [...KuSelectImports],
})
export class KuSelectModule {}
