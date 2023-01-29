import { NgModule } from '@angular/core';
import { RequiredFieldDirective } from './directives/required-field.directive';
import { IfDirectiveDirective } from './directives/if-directive.directive';

@NgModule({
  declarations: [RequiredFieldDirective, IfDirectiveDirective],
  exports: [RequiredFieldDirective, IfDirectiveDirective],
})
export class SharedModule {}
