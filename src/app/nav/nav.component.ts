import { Component } from '@angular/core';
import { Modals } from '../../constants';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public modalService: ModalService){

  }

  openModal(event: Event){
    event.preventDefault()
    this.modalService.toggleModalVisibility(Modals.AUTH)
  }

}
