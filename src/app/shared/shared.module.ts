import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropDownDirective } from './drop-down.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    PlaceholderDirective,
    DropDownDirective,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    PlaceholderDirective,
    DropDownDirective,
    LoadingSpinnerComponent,
    CommonModule,
  ],
})
export class SharedModule {}
