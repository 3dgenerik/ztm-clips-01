import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    ModalComponent,
    TabComponent,
    TabContainerComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ModalComponent,
    TabComponent,
    TabContainerComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
