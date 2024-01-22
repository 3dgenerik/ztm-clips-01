import { Component, OnDestroy, OnInit } from '@angular/core';
import { Modals } from '../../../constants';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit, OnDestroy{
  modalId:string = Modals.AUTH
  constructor(public modalService: ModalService){

  }

  ngOnInit(): void {
    this.modalService.register(this.modalId)
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.modalId)
  }

}
