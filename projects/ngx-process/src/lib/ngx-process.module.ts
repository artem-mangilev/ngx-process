import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessModule } from './graph/process.module';

@NgModule({
  imports: [CommonModule],
  exports: [ProcessModule]
})
export class NgxProcessModule {}
