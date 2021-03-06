import { NgModule } from '@angular/core';
import { ProcessComponent } from './process.component';
import { MouseWheelDirective } from './mouse-wheel.directive';
import { LayoutService } from './layouts/layout.service';
import { CommonModule } from '@angular/common';
import { VisibilityObserver } from '../utils/visibility-observer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export { ProcessComponent };

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [ProcessComponent, MouseWheelDirective, VisibilityObserver],
  exports: [ProcessComponent, MouseWheelDirective],
  providers: [LayoutService]
})
export class ProcessModule {}
