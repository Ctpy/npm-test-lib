import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    TestLibComponent,
    ModalComponent
  ],
  imports: [
  ],
  exports: [
    TestLibComponent
  ]
})
export class TestLibModule { }
